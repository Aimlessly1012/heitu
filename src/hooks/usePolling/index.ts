import { useCallback, useEffect, useRef, useState } from 'react';

interface Options<T> {
  interval?: number; // 轮询间隔时间
  manual?: boolean; // 是否手动开始轮询
  retryTimes?: number; // 失败重试次数
  retryInterval?: number; // 重试间隔时间
  onSuccess?: (data: T) => void; // 成功回调
  onError?: (error: Error) => void; // 失败回调
}

enum State {
  CLOSED,
  POLLING,
}
function usePolling<T>(service: () => Promise<T>, options: Options<T> = {}) {
  const {
    interval = 3000,
    manual = false,
    retryTimes = 0,
    retryInterval = 1000,
    onSuccess,
    onError,
  } = options;

  const [state, setState] = useState(State.CLOSED);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();

  const timerRef = useRef<NodeJS.Timeout>();
  const retryCountRef = useRef(0);
  const pollingRef = useRef(false);

  const stop = useCallback(() => {
    pollingRef.current = false;
    clearTimeout(timerRef.current);
    setState(State.CLOSED);
  }, []);

  const start = () => {
    if (pollingRef.current) return;

    pollingRef.current = true;
    setState(State.POLLING);
    retryCountRef.current = 0;

    const poll = async () => {
      if (!pollingRef.current) return;

      try {
        setLoading(true);
        const result = await service();
        setData(result);
        setError(undefined);
        retryCountRef.current = 0;
        onSuccess?.(result);

        // 设置下一次轮询
        timerRef.current = setTimeout(poll, interval);
      } catch (err) {
        setError(err as Error);
        onError?.(err as Error);

        if (retryTimes === 0) {
          return stop();
        }
        // 处理重试逻辑
        if (retryCountRef.current < retryTimes) {
          retryCountRef.current++;
          timerRef.current = setTimeout(poll, retryInterval);
        } else {
          stop();
        }
      } finally {
        setLoading(false);
      }
    };

    poll();
  };

  useEffect(() => {
    if (!manual) {
      start();
    }
    return () => {
      stop();
    };
  }, [manual]);

  return {
    data,
    loading,
    error,
    start,
    stop,
    state,
  };
}

export default usePolling;
