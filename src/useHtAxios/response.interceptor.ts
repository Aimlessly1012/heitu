/* eslint-disable prefer-promise-reject-errors */
// 历史原因, 不修改

import type { AxiosInstance, AxiosResponse } from 'axios';

import { HtRequestConfig } from './defaultConfig';

interface SelfResponse extends AxiosResponse {
  config: HtRequestConfig;
}

export const responseInterceptorOnSuccess = (response: SelfResponse): any => {
  const { data } = response;

  try {
    if (data instanceof Blob) {
      const contentD: string = response.headers['content-disposition'];
      const realFileName: string = contentD.split('filename=')[1];
      return {
        success: true,
        data: {
          file: data,
          fileName: realFileName,
        },
      };
    }
  } catch (e) {
    console.error(e);
  }

  if (response.headers?.['content-type'].indexOf('application/json') < 0) {
    return data;
  }
  return data;
};

export const responseInterceptorOnError = (error: any) => {
  const defaultMessage = '网络错误 稍后再试';

  if (error.__CANCEL__) {
    return;
  }

  if (error) {
    if (error.response && error.response.data) {
      const {
        response: {
          data: { errors = [] },
        },
      } = error;
      const errorObj = (errors && errors[0]) || {};
      return Promise.reject({
        message: errorObj.message || error.message || defaultMessage,
        arguments: errorObj.arguments || undefined,
        code: errorObj.code || null,
      });
    }
    return Promise.reject({
      message: error.message || defaultMessage,
      arguments: undefined,
      code: null,
    });
  }

  return Promise.reject({
    message: defaultMessage,
    arguments: undefined,
    code: null,
  });
};

export const responseInterceptorUse = (
  axiosClient: AxiosInstance,
  responseInterceptorOnSuccessCallback?: (
    response: AxiosResponse,
  ) => AxiosResponse,
  responseInterceptorOnErrorCallback?: (error: any) => any,
) => {
  // 添加外部响应成功拦截器
  if (responseInterceptorOnSuccessCallback) {
    axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return responseInterceptorOnSuccessCallback(response);
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
  // 添加外部响应失败拦截器
  if (responseInterceptorOnSuccessCallback) {
    axiosClient.interceptors.response.use((response: AxiosResponse) => {
      return response;
    }, responseInterceptorOnErrorCallback);
  }
  // 添加响应拦截器
  axiosClient.interceptors.response.use(
    responseInterceptorOnSuccess,
    responseInterceptorOnError,
  );
};
