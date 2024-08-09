import { useEffect, useState } from 'react';

const useCountDown = (): [number, (num?: number) => void, () => void] => {
  const [seconds, setSeconds] = useState<number>(0);
  let timer: NodeJS.Timeout;

  const stopCountDown = () => {
    clearTimeout(timer);
  };

  const startCountDown = (num?: number) => {
    stopCountDown();
    if (num) {
      setSeconds(num);
    } else {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
  };

  useEffect(() => {
    timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        stopCountDown();
      }
    }, 1000);
    return () => stopCountDown();
  }, [seconds]);

  return [seconds, startCountDown, stopCountDown];
};

export default useCountDown;
