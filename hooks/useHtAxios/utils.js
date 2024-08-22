import { isArray, isBoolean, isNull, isObject, isString, isUndefined } from 'lodash-es';
// 深度去除数据的空格
export var deepTrimData = function deepTrimData(data) {
  if (isUndefined(data) || isNull(data) || isBoolean(data)) return data;
  if (isArray(data)) {
    return data.map(function (item) {
      return deepTrimData(item);
    });
  } else if (isObject(data)) {
    var obj = Object.create(null);
    Object.keys(data).forEach(function (key) {
      // @ts-ignore
      obj[key] = deepTrimData(data[key]);
    });
    return obj;
  } else if (isString(data)) {
    return data.trim();
  } else {
    return data;
  }
};
export function isDebug() {
  if (typeof window === 'undefined') {
    return false;
  }
  return window && window.__debug__;
}
export function base64ToBytes(base64) {
  var binString = atob(base64);
  // @ts-ignore
  return Uint8Array.from(binString, function (m) {
    return m.codePointAt(0);
  });
}
export function bytesToBase64(bytes) {
  var binString = Array.from(bytes, function (byte) {
    return String.fromCodePoint(byte);
  }).join('');
  return btoa(binString);
}