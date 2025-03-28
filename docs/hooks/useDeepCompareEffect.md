---
group:
  title: effect
  order: 5

toc: content
order: 3
---

# useDeepCompareEffect

## 描述

依赖项使用深度比较而不是引用相等

## 演示

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { useDeepCompareEffect } from 'heitu';

export default () => {
  const [count, setCount] = useState(0);
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);

  useEffect(() => {
    effectCountRef.current += 1;
  }, [{}]);

  useDeepCompareEffect(() => {
    deepCompareCountRef.current += 1;
    return () => {
      // do something
    };
  }, [{}]);

  return (
    <div>
      <p>effectCount: {effectCountRef.current}</p>
      <p>deepCompareCount: {deepCompareCountRef.current}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
};
```

## API

### 参数

| 参数   | 说明       | 类型                                      | 默认值 |
| ------ | ---------- | ----------------------------------------- | ------ |
| effect | 副作用函数 | `() => void \| (() => void \| undefined)` | -      |
| deps   | 依赖数组   | `any[]`                                   | -      |
