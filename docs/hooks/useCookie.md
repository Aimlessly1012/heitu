---
group:
  title: State
  order: 1

toc: content
order: 1
---

# useCookie

## 描述

cookie 简便操作

## 演示

```tsx
import React, { LegacyRef, useEffect } from 'react';
import { useCookie } from 'heitu';

export default () => {
  const defaultOption = {
    path: '/',
  };
  const cookieName = 'cookie-key';
  const [cookieValue, updateCookie, refreshCookie] = useCookie(
    cookieName,
    defaultOption,
    'default-value',
  );

  const updateButtonClick = () => {
    updateCookie('new-cookie-value');
  };

  const deleteButtonClick = () => {
    updateCookie(undefined);
  };

  const change = () => {
    if ('cookieStore' in window) {
      const store = window.cookieStore as any;
      store.set({ name: cookieName, value: 'changed' });
    } else {
      document.cookie = `${cookieName}=changed; path=/`;
    }
  };

  return (
    <div>
      <p>点击按钮更新或清除cookie</p>
      <p color="blue">cookie: {cookieValue || 'no value'}</p>
      <button onClick={updateButtonClick}>更新 cookie</button>
      <button onClick={deleteButtonClick}>清除 cookie</button>
      <button onClick={change}>通过别的方式修改cookie</button>
      <button onClick={refreshCookie}>刷新 cookie</button>
    </div>
  );
};
```

## API

### 参数

| 参数         | 说明          | 类型            | 默认值          |
| ------------ | ------------- | --------------- | --------------- |
| key          | Cookie 的名称 | `string`        | -               |
| options      | Cookie 配置项 | `CookieOptions` | `{ path: '/' }` |
| defaultValue | 默认值        | `any`           | `undefined`     |

### CookieOptions

| 参数     | 说明                  | 类型                          | 默认值  |
| -------- | --------------------- | ----------------------------- | ------- |
| path     | Cookie 路径           | `string`                      | `'/'`   |
| domain   | Cookie 域名           | `string`                      | -       |
| maxAge   | 过期时间（秒）        | `number`                      | -       |
| expires  | 过期日期              | `Date`                        | -       |
| secure   | 是否只通过 HTTPS 传输 | `boolean`                     | `false` |
| sameSite | 跨站点请求设置        | `'strict' \| 'lax' \| 'none'` | -       |

### 返回值

| 参数          | 说明               | 类型                                             |
| ------------- | ------------------ | ------------------------------------------------ |
| cookieValue   | 当前 Cookie 值     | `T \| undefined`                                 |
| updateCookie  | 更新 Cookie 的函数 | `(newValue: T \| ((prevValue: T) => T)) => void` |
| refreshCookie | 刷新 Cookie 的函数 | `() => void`                                     |
