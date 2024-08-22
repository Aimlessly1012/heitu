import type { AxiosRequestConfig, AxiosResponse } from 'axios';
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
export interface HtRequestConfig extends AxiosRequestConfig {
    /**
     * 是否要过滤Null值与Undefined值
     */
    filter?: boolean;
    /** 是否要添加防缓存随机数 */
    cache?: boolean;
    /** 是否自动转换 put 和 delete 请求为 post 请求 */
    transformMethod?: boolean;
    message?: any;
    responseInterceptor?: (response: AxiosResponse) => any;
    requestInterceptor?: (config: HtRequestConfig) => HtRequestConfig;
    /** 是否将传入的 RequestInterceptor 覆盖掉默认的 RequestInterceptor */
    overrideDefaultRequestInterceptor?: boolean;
    /** 是否将传入的 ResponseInterceptor 覆盖掉默认的 ResponseInterceptor */
    overrideDefaultResponseInterceptor?: boolean;
    errorNotice?: Record<string, {
        msg: string;
        path: string;
    }>;
    /**
     * 是否添加 gzip 压缩, 触发条件为 post/put 请求 & content-type 为 json. 默认从 common-env 中获取
     * @default false
     */
    gzip?: boolean;
    /**
     * 当大于这个大小时, 才会开启压缩, 默认从 common-env 中获取
     * @default 8KB
     */
    gzipThresholdSize?: number;
    /** 是否开启 base64 编码 */
    base64?: boolean;
}
declare const headers: Record<string, string>;
export declare const defaultConfig: () => HtRequestConfig;
export { headers };
