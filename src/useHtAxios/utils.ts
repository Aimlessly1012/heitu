import {
  isArray,
  isBoolean,
  isNull,
  isObject,
  isString,
  isUndefined,
} from 'lodash-es';
// 深度去除数据的空格
export const deepTrimData = (data: any): any => {
  if (isUndefined(data) || isNull(data) || isBoolean(data)) return data;

  if (isArray(data)) {
    return data.map((item: any) => deepTrimData(item));
  } else if (isObject(data)) {
    const obj = Object.create(null);
    Object.keys(data).forEach((key) => {
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

export function base64ToBytes(base64: string) {
  const binString = atob(base64);
  // @ts-ignore
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

export function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join('');
  return btoa(binString);
}
