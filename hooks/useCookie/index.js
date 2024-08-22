function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { defaultOptions } from "../../utils/defaults";
import { isFunction, isString } from "../../utils/is";
import Cookies from 'js-cookie';
import { useCallback, useEffect, useState } from 'react';
import { getInitialState } from "./utils";
var useCookie = function useCookie(key) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var defaultValue = arguments.length > 2 ? arguments[2] : undefined;
  var _useState = useState(getInitialState(key, defaultValue)),
    _useState2 = _slicedToArray(_useState, 2),
    cookieValue = _useState2[0],
    setCookieValue = _useState2[1];
  useEffect(function () {
    var getStoredValue = function getStoredValue() {
      var raw = Cookies.get(key);
      if (raw !== undefined && raw !== null) {
        return raw;
      } else {
        if (defaultValue === undefined) {
          Cookies.remove(key);
        } else {
          Cookies.set(key, defaultValue, options);
        }
        return defaultValue;
      }
    };
    setCookieValue(getStoredValue());
  }, [defaultValue, key, JSON.stringify(options)]);
  var updateCookie = useCallback(function (newValue) {
    var value = isFunction(newValue) ? newValue(cookieValue) : newValue;
    if (value === undefined) {
      Cookies.remove(key);
    } else {
      Cookies.set(key, value, options);
    }
    setCookieValue(value);
  }, [key, cookieValue, JSON.stringify(options)]);
  var refreshCookie = useCallback(function () {
    var cookieValue = Cookies.get(key);
    if (isString(cookieValue)) {
      setCookieValue(cookieValue);
    }
  }, [key]);
  return [cookieValue, updateCookie, refreshCookie];
};
export default useCookie;