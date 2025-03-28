---
group:
  title: Element
  order: 2

toc: content
order: 1
---

# useResizeObserver

## 描述

用于监听 DOM 元素尺寸变化的 Hook。基于浏览器的 ResizeObserver API，当目标元素的尺寸发生变化时，会触发回调函数。

## 演示

```tsx
import React, { useRef, useEffect, useState } from 'react';
import { useResizeObserver } from 'heitu';

export default () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useResizeObserver(ref, (entries) => {
    const [entry] = entries;
    const { width, height } = entry.contentRect;
    setSize({ width, height });
  });
  return (
    <div>
      <textarea
        ref={ref}
        disabled
        style={{ width: 200, height: 200 }}
        value={`width: ${size.width}\nheight: ${size.height}`}
      />
    </div>
  );
};
```

## Arguments

| 参数名   | 描述                       | 类型                                                                 | 默认值 |
| -------- | -------------------------- | -------------------------------------------------------------------- | ------ |
| target   | 需要监听尺寸变化的元素引用 | `RefObject<Element> \| Element`                                      | -      |
| callback | 尺寸变化时的回调函数       | `(entries: ResizeObserverEntry[], observer: ResizeObserver) => void` | -      |
| options  | ResizeObserver 的配置选项  | `ResizeObserverOptions`                                              | -      |

## return

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
