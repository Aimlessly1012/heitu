import { useLayoutEffect, useRef } from 'react';

const usePrevious = (value: any) => {
  const ref = useRef({});
  useLayoutEffect(() => {
    ref.current = value;
  });
  useLayoutEffect(() => {
    return () => {
      ref.current = {};
    };
  }, []);
  return ref.current;
};

export default usePrevious;
