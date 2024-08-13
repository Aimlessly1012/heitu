# useSingleRequest

## 描述

实现前端多次调用接口时，只发送一次请求

## 演示

```tsx
import { Button } from 'antd';
import { useHtAxios, useSingleRequest } from 'heitu-hook';
import React from 'react';

export default () => {
  // const htAxios = useHtAxios({
  //   config: { timeout: 3000 },
  //   requestInterceptorsCallBack: (config) => {
  //     return config;
  //   },
  //   responseInterceptorsCallBack: (response) => {
  //     return response.data;
  //   },
  // });
  // const { getSourceData } = useSingleRequest();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          // getSourceData({
          //   url: 'http://jsonplaceholder.typicode.com/posts',
          //   method: 'get',
          //   params: {
          //     aa: '23123',
          //   },
          // });
        }}
      >
        123
      </Button>
    </div>
  );
};
```



## return

| name    | description      | type    | default |
| ------- | ---------------- | ------- | ------- |
| seconds | 用于展示的倒计时 | number  | 0       |
| startCountDown  | 开始倒计时,传参重置，不传继续 | (num?:number)=>void | false   |
