import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import URI from 'urijs';
import { HtRequestConfig } from './defaultConfig';
// import { addBase64ForConfig } from './interceptors/base64';
// import { addGzipForConfig } from './interceptors/gzip';
import { deepTrimData } from './utils';

export const source = axios.CancelToken.source();
export interface RequestInterceptorInterface {
  (config: HtRequestConfig): HtRequestConfig;
}
export const requestInterceptor: RequestInterceptorInterface = (
  config: HtRequestConfig,
) => {
  config.cancelToken = source.token;
  const uri = URI(config.url);
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
    const { data = {} }: any = config;
    // 过滤假值
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const item = data[key];
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

export const requestInterceptorUse = (
  axiosClient: AxiosInstance,
  requestInterceptorsCallback?: (
    config: AxiosRequestConfig,
  ) => AxiosRequestConfig,
) => {
  // 添加外部请求拦截器
  if (requestInterceptorsCallback) {
    // 添加请求拦截器
    axiosClient.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return requestInterceptorsCallback(config) as
          | InternalAxiosRequestConfig<any>
          | Promise<InternalAxiosRequestConfig<any>>;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
  // 添加请求拦截器
  axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return requestInterceptor(config) as
        | InternalAxiosRequestConfig<any>
        | Promise<InternalAxiosRequestConfig<any>>;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
