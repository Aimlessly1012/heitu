function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import axios from 'axios';
import { merge } from 'lodash-es';
import { defaultConfig } from "./defaultConfig";
import { requestInterceptorUse } from "./request.interceptor";
import { responseInterceptorUse } from "./response.interceptor";
var useHtAxios = function useHtAxios(_ref) {
  var _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config,
    requestInterceptorsCallback = _ref.requestInterceptorsCallback,
    responseInterceptorOnSuccessCallback = _ref.responseInterceptorOnSuccessCallback,
    responseInterceptorOnErrorCallback = _ref.responseInterceptorOnErrorCallback;
  var mergeConfig = merge(defaultConfig(), config);

  // 创建实例
  var axiosClient = axios.create(mergeConfig);
  requestInterceptorUse(axiosClient, requestInterceptorsCallback);
  responseInterceptorUse(axiosClient, responseInterceptorOnSuccessCallback, responseInterceptorOnErrorCallback);

  // 导出方法
  function get(url, data, config) {
    return axiosClient.request(_objectSpread({
      url: url,
      params: data
    }, config));
  }
  function post(url, data, config) {
    return axiosClient.request(_objectSpread({
      url: url,
      method: 'post',
      params: data
    }, config));
  }
  function put(url, data, config) {
    return axiosClient.request(_objectSpread({
      url: url,
      method: 'put',
      params: data
    }, config));
  }
  function del(url, data, config) {
    return axiosClient.request(_objectSpread({
      url: url,
      method: 'delete',
      params: data
    }, config));
  }
  return {
    get: get,
    post: post,
    del: del,
    put: put
  };
};
export default useHtAxios;