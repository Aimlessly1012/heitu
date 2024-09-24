import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash-es';
import { defaultConfig } from './defaultConfig';
import { requestInterceptorUse } from './request.interceptor';
import { responseInterceptorUse } from './response.interceptor';

const useHtAxios = ({
  config = {},
  requestInterceptorsCallback,
  responseInterceptorOnSuccessCallback,
  responseInterceptorOnErrorCallback,
}: {
  config: AxiosRequestConfig;
  requestInterceptorsCallback?: (
    config: AxiosRequestConfig,
  ) => AxiosRequestConfig;
  responseInterceptorOnSuccessCallback?: (
    response: AxiosResponse,
  ) => AxiosResponse;
  responseInterceptorOnErrorCallback?: (error: any) => any;
}) => {
  const mergeConfig = merge(defaultConfig(), config);

  // 创建实例
  const axiosClient = axios.create(mergeConfig);

  requestInterceptorUse(axiosClient, requestInterceptorsCallback);
  responseInterceptorUse(
    axiosClient,
    responseInterceptorOnSuccessCallback,
    responseInterceptorOnErrorCallback,
  );

  // 导出方法
  function get<T, R>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R> {
    return axiosClient.request({ url, params: data, ...config });
  }

  function post<T, R>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R> {
    return axiosClient.request({
      url,
      method: 'post',
      params: data,
      ...config,
    });
  }

  function put<T, R>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R> {
    return axiosClient.request({
      url,
      method: 'put',
      params: data,
      ...config,
    });
  }

  function del<T, R>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R> {
    return axiosClient.request({
      url,
      method: 'delete',
      params: data,
      ...config,
    });
  }

  return { get, post, del, put };
};
export default useHtAxios;
