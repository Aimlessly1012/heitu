import { defaultOptions } from "../../utils/defaults";
import { useEffect } from 'react';
var useResizeObserver = function useResizeObserver(containerRef, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;
  useEffect(function () {
    var ob = new ResizeObserver(cb);
    if (containerRef !== null && containerRef !== void 0 && containerRef.current) {
      ob.observe(containerRef.current, options);
    }
    // 清除观察器
    return function () {
      if (containerRef !== null && containerRef !== void 0 && containerRef.current) {
        ob.unobserve(containerRef.current);
      }
      ob.disconnect();
    };
  }, []);
};
export default useResizeObserver;