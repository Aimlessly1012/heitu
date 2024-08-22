import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HtRequestConfig } from './defaultConfig';
export declare const source: import("axios").CancelTokenSource;
export interface RequestInterceptorInterface {
    (config: HtRequestConfig): HtRequestConfig;
}
export declare const requestInterceptor: RequestInterceptorInterface;
export declare const requestInterceptorUse: (axiosClient: AxiosInstance, requestInterceptorsCallback?: ((config: AxiosRequestConfig) => AxiosRequestConfig) | undefined) => void;
