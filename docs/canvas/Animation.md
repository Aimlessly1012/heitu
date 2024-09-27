---
group:
  title: 动画
  order: 4

toc: content
order: 3
---

# Animate

## 描述

基于 canvas 中图形添加动画

## 给图像添加动画

```tsx
import { Circle, Stage, useResizeObserver, Animate } from 'heitu';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);

  const _circle = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
  });

  _stage.add(_circle);
  const onclick = () => {
    const ani = new Animate(
      { value: 0 },
      { value: 360 },
      { duration: 1000, easing: 'quadraticInOut' },
    );
    ani.start();
    const x = _circle.x;
    const y = _circle.y;
    let curX = _circle.x;
    let curY = _circle.y;
    const radius = _circle.radius;
    let curRadius = _circle.radius;
    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;
      curX = (300 - curX) * elapsedTimeRatio;
      curY = (400 - curY) * elapsedTimeRatio;
      _circle.attr({ x: x + curX, y: y + curY, radius: radius - curRadius });
    };
    ani.pushQueue(onUpdate);
  };
  _circle.on('click', onclick);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
    const ani = new Animate(
      { value: 0 },
      { value: 360 },
      { duration: 1000, easing: 'quadraticInOut' },
    );
    ani.start();
    const radius = _circle.radius;
    let curRadius = _circle.radius;

    const onUpdate = (_, elapsedTimeRatio) => {
      curRadius = (radius - curRadius) * elapsedTimeRatio;

      _circle.attr({ radius: radius + curRadius });
    };
    ani.pushQueue(onUpdate);
    return () => ani.stop();
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      <div ref={container}></div>
    </>
  );
};
```

## API

| name | description | type                                                                     | default |
| ---- | ----------- | ------------------------------------------------------------------------ | ------- |
| on   | 绑定事件    | (event: string, callback: (e: MouseEvent) => void,node:原生原型) => void | -       |
| off  | 解绑定事件  | (event: string, callback: (e: MouseEvent) => void,node:原生原型) => void | -       |
