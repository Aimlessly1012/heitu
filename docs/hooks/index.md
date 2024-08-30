---
nav:
  title: Hooks
  order: 1
---

# 安装下载

```bash

  npm i heitu or yarn add heitu

```

# 使用

```ts
import { useCookie } from 'heitu';
export const Index = () => {
  const [cookieValue, updateCookie, refreshCookie] = useCookie(
    cookieName,
    defaultOption,
    'default-value',
  );
  return <></>;
};
```
