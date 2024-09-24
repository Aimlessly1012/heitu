import type { DependencyList } from 'react';
import React, { useRef } from 'react';
import useAsyncFn from './useAsyncFn';

export type ICancelInterceptor = () => void | never;

export interface ICancel {
  cancelInterceptor: ICancelInterceptor;
}

export type ICancelAsyncFn = (
  params: ICancel,
) => Promise<(...args: any[]) => Promise<any>>;

const useCancelAsyncFn = (fn: ICancelAsyncFn, deps: DependencyList) => {
  const controller = useRef<AbortController>();

  const cancelInterceptor = () => {
    if (controller.current) {
      controller.current.abort();
      throw new Error(` Canceled .`);
    }
  };

  React.useEffect(() => {
    return () => {
      if (controller.current) {
        controller.current.abort();
      }
    };
  }, []);

  const result = useAsyncFn(async (...args: any[]) => {
    // 如果已有控制器，则取消之前的请求
    if (controller.current) {
      controller.current.abort();
    }

    // 创建新的 AbortController 实例
    controller.current = new AbortController();
    const signal = controller.current.signal;

    const cancelParams = {
      cancelInterceptor: cancelInterceptor,
    };

    const next = await fn(cancelParams);
    const result1 = await next(...args);
    return result1;
  }, deps);

  return result;
};
export default useCancelAsyncFn;
