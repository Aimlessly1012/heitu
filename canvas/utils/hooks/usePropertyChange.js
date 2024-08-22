function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useLayoutEffect } from 'react';
export var usePropertyChange = function usePropertyChange(props, property, shape) {
  useLayoutEffect(function () {
    // if (props.animation?.duration > 16.7) {
    //   shape
    //     .animateCartoon({ [property]: props[property] }, { ...props.animation })
    //     .then(() => {
    //       props.animation.animationEnd?.();
    //     });
    // } else {
    //   if (props[property] !== undefined) {
    //     shape.attr({ [property]: props[property] });
    //   }
    // }
    if (props[property] !== undefined) {
      shape.attr(_defineProperty({}, property, props[property]));
    }
  }, [props[property]]);
};