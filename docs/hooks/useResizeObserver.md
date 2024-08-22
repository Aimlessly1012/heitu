---
group:
  title: Element
  order: 2

toc: content
order: 1
---
# useResizeObserver

## 描述

获取元素是否在可视范围内的 hook

## 演示


```tsx
import React, { useRef, useEffect, useState } from 'react';
import { useResizeObserver } from 'heitu';
import { Input } from 'antd';

export default () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useResizeObserver(ref, (entries) => {
    const [entry] = entries;
    const { width, height } = entry.contentRect;
    setSize({width, height});
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

| name | description | type | default |
| ---- | ----------- | ---- | ------- |

## return

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
