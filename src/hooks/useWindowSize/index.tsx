import { useLayoutEffect, useState } from 'react';
import type { UseWindowSize } from './interface';

const useWindowSize: UseWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
  };
};
export default useWindowSize;
