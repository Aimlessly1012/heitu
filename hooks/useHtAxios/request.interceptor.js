import axios from 'axios';
import URI from 'urijs';
// import { addBase64ForConfig } from './interceptors/base64';
// import { addGzipForConfig } from './interceptors/gzip';
import { deepTrimData } from "./utils";
export var source = axios.CancelToken.source();
export var requestInterceptor = function requestInterceptor(config) {
  config.cancelToken = source.token;
  var uri = URI(config.url);
  config.url = uri.query(deepTrimData(uri.query(true)) || {}).toString();
  if (config.data) {
    config.data = deepTrimData(config.data);
  }

  // params 处理
  config.params = deepTrimData(config.params || {});
  if (config.cache) {
    config.params = config.params || {};
    config.params.__cache__ = Math.random();
  }
  if (config.filter) {
    var _config$data = config.data,
      data = _config$data === void 0 ? {} : _config$data;
    // 过滤假值
    // eslint-disable-next-line no-restricted-syntax
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var item = data[key];
        if (item === null || item === undefined) {
          delete data[key];
        }
      }
    }
  }
  if (config.method === 'get' && config.data) {
    config.params = config.data;
    delete config.data;
  }

  // if (config.gzip) {
  //   addGzipForConfig(config, config.gzipThresholdSize);
  // }

  // if (config.base64) {
  //   addBase64ForConfig(config);
  // }

  return config;
};
export var requestInterceptorUse = function requestInterceptorUse(axiosClient, requestInterceptorsCallback) {
  // 添加外部请求拦截器
  if (requestInterceptorsCallback) {
    // 添加请求拦截器
    axiosClient.interceptors.request.use(function (config) {
      return requestInterceptorsCallback(config);
    }, function (error) {
      return Promise.reject(error);
    });
  }
  // 添加请求拦截器
  axiosClient.interceptors.request.use(function (config) {
    return requestInterceptor(config);
  }, function (error) {
    return Promise.reject(error);
  });
};