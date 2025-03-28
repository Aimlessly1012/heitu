---
group:
  title: Request
  order: 3

toc: content
order: 1
---

# useHtAxios

## 描述

useHtAxios 是一个基于 axios 封装的请求 Hook，提供了更便捷的请求方式和更灵活的配置选项。

- 基于 axios 封装的请求 hook
- 增加 axios 默认配置
- 支持额外配置 axios 通用配置
- 支持额外配置 axios 拦截请求
- 支持额外配置 axios 拦截响应

## 演示

```tsx
import { useHtAxios } from 'heitu';
import React from 'react';
export default () => {
  const htAxios = useHtAxios({
    // 自定义配置
    config: {
      timeout: 3000,
    },
    // 请求拦截器
    requestInterceptorsCallBack: (config) => {
      // 可以在这里统一处理请求头、认证信息等
      return config;
    },
    // 响应拦截器
    responseInterceptorsCallBack: (response) => {
      // 可以在这里统一处理响应数据
      return response.data;
    },
  });

  const getInfo = async () => {
    const res = await htAxios.get('http://jsonplaceholder.typicode.com/posts', {
      aa: '23123',
    });
    alert(JSON.stringify(res));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <button
        type="button"
        style={{ width: '50px' }}
        onClick={() => {
          getInfo();
        }}
      >
        请求
      </button>
    </div>
  );
};
```

## 参数

| 参数名                                 | 描述                   | 类型                                                 | 默认值 |
| -------------------------------------- | ---------------------- | ---------------------------------------------------- | ------ |
| `config`                               | axios 全局配置项       | `AxiosRequestConfig`                                 | `{}`   |
| `requestInterceptorsCallback`          | 请求拦截器回调函数     | `(config: AxiosRequestConfig) => AxiosRequestConfig` | -      |
| `responseInterceptorOnSuccessCallback` | 响应成功拦截器回调函数 | `(response: AxiosResponse) => AxiosResponse`         | -      |
| `responseInterceptorOnErrorCallback`   | 响应错误拦截器回调函数 | `(error: any) => any`                                | -      |

## 返回值

| 名称   | 描述            | 类型                                                                            |
| ------ | --------------- | ------------------------------------------------------------------------------- |
| `get`  | GET 请求方法    | `<T, R>(url: string, data: T, config?: AxiosRequestConfig) => AxiosPromise<R>`  |
| `post` | POST 请求方法   | `<T, R>(url: string, data?: T, config?: AxiosRequestConfig) => AxiosPromise<R>` |
| `put`  | PUT 请求方法    | `<T, R>(url: string, data?: T, config?: AxiosRequestConfig) => AxiosPromise<R>` |
| `del`  | DELETE 请求方法 | `<T, R>(url: string, data: T, config?: AxiosRequestConfig) => AxiosPromise<R>`  |
