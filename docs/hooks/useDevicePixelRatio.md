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

  return (
    <div>
      <p>当前设备像素比: {pixelRatio}</p>
      <p>说明：在支持缩放的设备上改变缩放比例，数值会实时更新</p>
    </div>
  );
};
```

## 返回值

| 参数名     | 说明             | 类型     | 默认值 |
| ---------- | ---------------- | -------- | ------ |
| pixelRatio | 当前设备的像素比 | `number` | 1      |
