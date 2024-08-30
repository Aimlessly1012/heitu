---
group:
  title: State
  order: 1

toc: content
order: 2
---

# useCountDown

## 描述

倒计时 hook

## 演示

```tsx
import React, { LegacyRef, useEffect } from 'react';
import { useCountDown } from 'heitu';


export default () => {
  const [seconds, startCountDown, stopCountDown] = useCountDown();
  return (
    <div>
      {seconds}
      <button
        onClick={() => {
          startCountDown(60);
        }}
      >
        开始
      </button>
      <button
        onClick={() => {
          stopCountDown();
        }}
      >
        暂停
      </button>
      <button
        onClick={() => {
          startCountDown();
        }}
      >
        继续
      </button>
    </div>
  );
};
```

## return

| name           | description                   | type                | default |
| -------------- | ----------------------------- | ------------------- | ------- |
| seconds        | 用于展示的倒计时              | number              | 0       |
| startCountDown | 开始倒计时,传参重置，不传继续 | (num?:number)=>void | false   |
