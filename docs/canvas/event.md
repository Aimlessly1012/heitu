---
group:
  title: 事件
  order: 3

toc: content
order: 1
---

# Event

## 描述

基于 canvas 中图形的事件

## 给图像添加事件监听

使用 on 方法绑定事件，使用 off 方法解绑事件。

```tsx
import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const [eventName, setEventName] = useState('');
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);

  const _circle1 = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    strokeStyle: 'pink',
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
  });
  _stage.add(_circle1);
  const aa = (e) => {
    setEventName('click');
  };
  const bb = (e) => {
    setEventName('mousedown');
  };
  const cc = (e) => {
    setEventName('mousemove');
  };
  const dd = (e) => {
    setEventName('mouseup');
  };
  const ee = (e) => {
    setEventName('mouseenter');
  };
  const ff = (e) => {
    setEventName('contextmenu');
  };

  _circle1.on('click', aa);
  _circle1.on('mousedown', bb);
  _circle1.on('mousemove', cc);
  _circle1.on('mouseup', dd);
  _circle1.on('mouseenter', ee);
  _circle1.on('contextmenu', ff);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
    return () => {
      _circle1.off('click', aa);
      _circle1.off('mousedown', bb);
      _circle1.off('mousemove', cc);
      _circle1.off('mouseup', dd);
      _circle1.off('mouseenter', ee);
      _circle1.off('contextmenu', ff);
    };
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      {eventName}
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
