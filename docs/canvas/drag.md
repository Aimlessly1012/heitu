---
group:
  title: 事件
  order: 3

toc: content
order: 2
---

# Drag

## 描述

基于 canvas 中图形的拖拽事件

## 给图像添加事件监听

给元素添加 draggable 属性，可以这是 boolean 值或者 函数接收 鼠标事件参数

```tsx
import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);

  const _circle = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
    draggable: true,
  });
  const _circle1 = new Circle({
    x: 100,
    y: 100,
    radius: 50,
    fillStyle: 'pink',
    lineWidth: 2,
    border: 2,
    draggable: (e, node) => {
      setXY({ x: node.x, y: node.y });
    },
  });
  _stage.add(_circle, _circle1);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return (
    <>
      {xy.x},{xy.y}
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
