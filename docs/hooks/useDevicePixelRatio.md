---
group:
  title: browser
  order: 6

toc: content
order: 1
---

# useDevicePixelRatio

## 描述

用于获取屏幕的设备像素比

## 演示

```tsx
import React, { useState, useEffect } from 'react';
import { useDevicePixelRatio } from 'heitu';

export default () => {
  const { pixelRatio } = useDevicePixelRatio();

  return <p>Device pixel ratio: {pixelRatio}</p>;
};
```

## Arguments

| name | description | type | default |
| ---- | ----------- | ---- | ------- |

## return

| name       | description | type   | default |
| ---------- | ----------- | ------ | ------- |
| pixelRatio | 设备像素比  | number | -       |
