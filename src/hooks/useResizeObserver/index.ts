import { defaultOptions } from 'heitu-hook/utils/defaults';
import { useEffect } from 'react';

const useResizeObserver = (
  containerRef: any,
  cb: ResizeObserverCallback,
  options: ResizeObserverOptions = defaultOptions,
) => {
  useEffect(() => {
    const ob = new ResizeObserver(cb);

    if (containerRef?.current) {
      ob.observe(containerRef.current, options);
    }
    // 清除观察器
    return () => {
      if (containerRef?.current) {
        ob.unobserve(containerRef.current);
      }
      ob.disconnect();
    };
  }, []);
};

export default useResizeObserver;
