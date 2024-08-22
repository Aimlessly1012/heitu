import { useLayoutEffect, useRef } from 'react';
var usePrevious = function usePrevious(value) {
  var ref = useRef({});
  useLayoutEffect(function () {
    ref.current = value;
  });
  useLayoutEffect(function () {
    return function () {
      ref.current = {};
    };
  }, []);
  return ref.current;
};
export default usePrevious;