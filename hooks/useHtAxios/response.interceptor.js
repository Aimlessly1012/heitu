/* eslint-disable prefer-promise-reject-errors */
// 历史原因, 不修改

// @ts-ignore

export var responseInterceptorOnSuccess = function responseInterceptorOnSuccess(response) {
  var _response$headers;
  var data = response.data;
  try {
    if (data instanceof Blob) {
      var contentD = response.headers['content-disposition'];
      var realFileName = contentD.split('filename=')[1];
      return {
        success: true,
        data: {
          file: data,
          fileName: realFileName
        }
      };
    }
  } catch (e) {
    console.error(e);
  }
  if (((_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers['content-type'].indexOf('application/json')) < 0) {
    return data;
  }
  return data;
};
export var responseInterceptorOnError = function responseInterceptorOnError(error) {
  var defaultMessage = '网络错误 稍后再试';
  if (error.__CANCEL__) {
    return;
  }
  if (error) {
    if (error.response && error.response.data) {
      var _error$response$data$ = error.response.data.errors,
        errors = _error$response$data$ === void 0 ? [] : _error$response$data$;
      var errorObj = errors && errors[0] || {};
      return Promise.reject({
        message: errorObj.message || error.message || defaultMessage,
        arguments: errorObj.arguments || undefined,
        code: errorObj.code || null
      });
    }
    return Promise.reject({
      message: error.message || defaultMessage,
      arguments: undefined,
      code: null
    });
  }
  return Promise.reject({
    message: defaultMessage,
    arguments: undefined,
    code: null
  });
};
export var responseInterceptorUse = function responseInterceptorUse(axiosClient, responseInterceptorOnSuccessCallback, responseInterceptorOnErrorCallback) {
  // 添加外部响应成功拦截器
  if (responseInterceptorOnSuccessCallback) {
    axiosClient.interceptors.response.use(function (response) {
      return responseInterceptorOnSuccessCallback(response);
    }, function (error) {
      return Promise.reject(error);
    });
  }
  // 添加外部响应失败拦截器
  if (responseInterceptorOnSuccessCallback) {
    axiosClient.interceptors.response.use(function (response) {
      return response;
    }, responseInterceptorOnErrorCallback);
  }
  // 添加响应拦截器
  axiosClient.interceptors.response.use(responseInterceptorOnSuccess, responseInterceptorOnError);
};