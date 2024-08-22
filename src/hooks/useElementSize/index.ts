import useResizeObserver from 'heitu/hooks/useResizeObserver';
import { defaultOptions } from 'heitu/utils/defaults';
import { useState } from 'react';

const useElementSize = (
  containerRef: any,
  options: ResizeObserverOptions = defaultOptions,
) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useResizeObserver(
    containerRef,
    (entries) => {
      if (entries.length === 0) return;
      const [entry] = entries;
      const { width, height } = entry.contentRect;
      setSize({
        width: width,
        height: height,
      });
    },
    options,
  );

  return size;
};

export default useElementSize;
