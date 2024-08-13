import { useRef } from 'react';

const useQueue = () => {
  const queue = useRef([]);
  return [queue];
};

export default useQueue;
