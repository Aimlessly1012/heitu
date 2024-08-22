var _window;
import React from 'react';
var toString = Object.prototype.toString;
export function isFunction(val) {
  return typeof val === 'function';
}
export var isDef = function isDef(val) {
  return typeof val !== 'undefined';
};
export function isUndef(value) {
  return typeof value === 'undefined';
}
export var isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};
export var isNumber = function isNumber(val) {
  return typeof val === 'number';
};
export function isString(val) {
  return typeof val === 'string';
}
export function isObject(val) {
  return toString.call(val) === '[object Object]';
}
export var isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
export var isBrowser = typeof window !== 'undefined';
export var isNavigator = typeof navigator !== 'undefined';
export function noop() {}
export var isIOS
/* #__PURE__ */ = isBrowser && ((_window = window) === null || _window === void 0 || (_window = _window.navigator) === null || _window === void 0 ? void 0 : _window.userAgent) && /iP(?:ad|hone|od)/.test(window.navigator.userAgent);
export var isReactLegacy = !React.useId;