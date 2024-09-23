---
group:
  title: effect
  order: 5

toc: content
order: 1
---

# usePrevious

## 描述

用于组件获取前一次接受的 prop

## 演示

```tsx
import React, { useState, useEffect } from 'react';
import { usePrevious } from 'heitu';

const Child = (props) => {
  const prev = usePrevious(props);

  console.log(prev, props);
  return (
    <div>
      <div>前一个aa: {prev?.aa || 0} </div>
      <div>当前的aa: {props?.aa}</div>
    </div>
  );
};

export default () => {
  const [aa, sa] = useState(1);

  return (
    <div>
      <button onClick={() => sa(aa + 1)}>+1</button>
      <Child aa={aa} />
    </div>
  );
};
```

## Arguments

| name  | description      | type | default |
| ----- | ---------------- | ---- | ------- |
| props | 需要存储的 props | any  | -       |

## return

| name | description  | type | default |
| ---- | ------------ | ---- | ------- |
| prev | 上一个 props | any  | -       |
