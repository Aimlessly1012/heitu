# useCountDown

## 描述

倒计时 hook

## 演示

<!-- <code src="./demo.tsx" description="demo 描述"></code> -->

```tsx
import React, { LegacyRef, useEffect } from 'react';
import { useCountDown } from 'heitu-hook';

export default () => {
  const [seconds,startCountDown,stopCountDown] = useCountDown();
  return (
    <div>
      {seconds}
      <button
        type="default"
        onClick={() => {
          startCountDown(60)
        }}
      >
        开始
      </button>
      <button
        type="default"
        onClick={() => {
          stopCountDown();
        }}
      >
        暂停
      </button>
      <button
        type="default"
        onClick={() => {
         startCountDown()
        }}
      >
        继续
      </button>
    </div>
  );
};
```



## return

| name    | description      | type    | default |
| ------- | ---------------- | ------- | ------- |
| seconds | 用于展示的倒计时 | number  | 0       |
| startCountDown  | 开始倒计时,传参重置，不传继续 | (num?:number)=>void | false   |
