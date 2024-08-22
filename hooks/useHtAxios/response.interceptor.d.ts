import type { AxiosInstance, AxiosResponse } from 'axios';
import { HtRequestConfig } from './defaultConfig';
interface SelfResponse extends AxiosResponse {
    config: HtRequestConfig;
}
export declare const responseInterceptorOnSuccess: (response: SelfResponse) => any;
export declare const responseInterceptorOnError: (error: any) => Promise<never> | undefined;
export declare const responseInterceptorUse: (axiosClient: AxiosInstance, responseInterceptorOnSuccessCallback?: ((response: AxiosResponse) => AxiosResponse) | undefined, responseInterceptorOnErrorCallback?: ((error: any) => any) | undefined) => void;
export {};
