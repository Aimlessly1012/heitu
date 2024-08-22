import { HEADER_CONTENT_TYPE_APPLICATION_JSON } from "./constants";
// import { getEnvToken } from './utils';

/**
 * config
 *  1. baseURL: 作用：设置请求的基础 URL，用于所有请求的 URL 前缀。
 *  2. timeout: 作用：指定请求超时的毫秒数。如果请求超过这个时间，请求将被中止。
 *  3. headers: 作用：设置默认的请求头，可以包含每个请求都需要的默认 headers。
 *  4. paramsSerializer: 作用：定义对 params 的序列化处理函数，用于自定义序列化过程。
 *  5. withCredentials: 作用：指示是否跨站点访问控制请求应该使用凭据（如 cookie 或授权头）。
 *  6. transformRequest: 定义转换请求数据的函数。只能用于 POST、PUT、PATCH 方法，且 Content-Type 是 application/x-www-form-urlencoded, application/json 或 multipart/form-data。
 *  7. transformResponse: 作用：定义转换响应数据的函数。这些函数会在数据被传递给 then 或 catch 之前调用。
 *  8. validateStatus:作用：定义转换响应数据的函数。这些函数会在数据被传递给 then 或 catch 之前调用。
 *  9. maxContentLength: 作用：指定接收响应数据的最大字节大小。
 */

var headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Cache-Control': 'no-cache',
  'Content-Type': HEADER_CONTENT_TYPE_APPLICATION_JSON,
  Accept: 'application/json;version=3.0;compress=false;'
};
export var defaultConfig = function defaultConfig() {
  // const reqConfig = getCommonEnv<Window['__env__']['request']>('request');

  return {
    method: 'get',
    baseURL: '/',
    withCredentials: true,
    transformMethod: false,
    timeout: 30 * 1000,
    responseType: 'json',
    maxContentLength: 1024 * 1024 * 1024,
    filter: false,
    cache: false,
    overrideDefaultRequestInterceptor: false,
    overrideDefaultResponseInterceptor: false
    // gzip: reqConfig?.gzip ?? false,
    // gzipThresholdSize: reqConfig?.gzipThresholdSize ?? 8000,
    // base64: reqConfig?.base64 ?? false,
  };
};
export { headers };