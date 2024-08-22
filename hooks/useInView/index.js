function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useEffect, useRef, useState } from 'react';
var useInView = function useInView() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    root: null,
    rootMargin: '0px',
    threshold: 1
  };
  var triggerOnce = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    inView = _useState2[0],
    setInView = _useState2[1];
  var targetRef = useRef(null);
  useEffect(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          setInView(false);
        }
      });
    }, options);
    if (targetRef !== null && targetRef !== void 0 && targetRef.current) {
      observer.observe(targetRef.current);
    }
    return function () {
      if (targetRef !== null && targetRef !== void 0 && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options, triggerOnce]);
  return [targetRef, inView];
};
export default useInView;