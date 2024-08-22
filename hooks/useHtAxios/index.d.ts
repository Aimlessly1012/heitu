import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
declare const useHtAxios: ({ config, requestInterceptorsCallback, responseInterceptorOnSuccessCallback, responseInterceptorOnErrorCallback, }: {
    config: AxiosRequestConfig;
    requestInterceptorsCallback?: ((config: AxiosRequestConfig) => AxiosRequestConfig) | undefined;
    responseInterceptorOnSuccessCallback?: ((response: AxiosResponse) => AxiosResponse) | undefined;
    responseInterceptorOnErrorCallback?: ((error: any) => any) | undefined;
}) => {
    get: <T, R>(url: string, data: T, config?: AxiosRequestConfig) => AxiosPromise<R>;
    post: <T_1, R_1>(url: string, data?: T_1 | undefined, config?: AxiosRequestConfig) => AxiosPromise<R_1>;
    del: <T_2, R_2>(url: string, data: T_2, config?: AxiosRequestConfig) => AxiosPromise<R_2>;
    put: <T_3, R_3>(url: string, data?: T_3 | undefined, config?: AxiosRequestConfig) => AxiosPromise<R_3>;
};
export default useHtAxios;
