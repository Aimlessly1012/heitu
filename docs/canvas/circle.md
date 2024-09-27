---
group:
  title: 图形
  order: 2

toc: content
order: 3
---

# Circle

## 描述

基于 canvas 绘制的圆形圆弧

## 核心使用

```tsx
import { Circle, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _circle = new Circle({
    x: 100,
    y: 150,
    radius: 50,
    strokeStyle: 'blue',
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
    startAngle: 200,
    endAngle: 270,
  });
  const _circle1 = new Circle({
    x: 200,
    y: 150,
    radius: 50,
    strokeStyle: 'pink',
    fillStyle: 'blue',
    lineWidth: 2,
    border: 2,
  });
  _stage.add(_circle, _circle1);
  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
  }, []);

  useResizeObserver(container, () => _stage._resizeDOM());
  return <div ref={container}></div>;
};
```

## API

| name        | description                            | type                                 | default |
| ----------- | -------------------------------------- | ------------------------------------ | ------- |
| x           | x 坐标                                 | number                               | 0       |
| y           | y 坐标                                 | number                               | 0       |
| fillStyle   | 填充颜色                               | string                               | #000    |
| strokeStyle | 描边颜色                               | string                               | #000    |
| lineWidth   | 描边宽度                               | number                               | 1       |
| draggable   | 是否可拖动                             | (evt: MouseEvent) => void / boolean; | false   |
| radius      | 半径                                   | number                               | 0       |
| startAngle  | 起始角度                               | number                               | 0       |
| endAngle    | 结束角度                               | number                               | 0       |
| border      | 边框 // 0 填充 1 只有边框 2 边框和填充 | number                               | 0       |
| index       | 层级                                   | number                               | 1       |
