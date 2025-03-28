import type { DependencyList } from 'react';
import { useEffect, useRef } from 'react';
import useAsyncFn from './useAsyncFn';

export interface CancelContext {
  signal: AbortSignal;
  cancelInterceptor: () => void;
}

export type CancelableAsyncFn<T = any> = (context: CancelContext) => Promise<T>;

const useCancelAsyncFn = <T>(
  fn: CancelableAsyncFn<T>,
  deps: DependencyList,
) => {
  const controller = useRef<AbortController>();

  // 清理函数
  const cleanup = () => {
    if (controller.current) {
      controller.current.abort();
    }
  };

  // 组件卸载时清理
  useEffect(() => {
    return cleanup;
  }, []);

  const result = useAsyncFn(async () => {
    // 取消之前的请求
    cleanup();

    // 创建新的 AbortController
    controller.current = new AbortController();

    try {
      const context: CancelContext = {
        signal: controller.current.signal,
        cancelInterceptor: cleanup,
      };

      return await fn(context);
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        // 忽略取消的请求错误
        return;
      }
      throw error;
    }
  }, deps);

  return result;
};

export default useCancelAsyncFn;
