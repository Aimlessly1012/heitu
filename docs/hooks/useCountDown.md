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
import { Button } from 'antd';

export default () => {
  const [seconds,startCountDown,stopCountDown] = useCountDown();
  return (
    <div>
      {seconds}
      <Button
        type="default"
        onClick={() => {
          startCountDown(60)
        }}
      >
        开始
      </Button>
      <Button
        type="default"
        onClick={() => {
          stopCountDown();
        }}
      >
        暂停
      </Button>
      <Button
        type="default"
        onClick={() => {
         startCountDown()
        }}
      >
        继续
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
