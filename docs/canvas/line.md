---
group:
  title: 图形
  order: 2

toc: content
order: 2
---

# Line

## 描述

基于 canvas 绘制的直线、二次贝塞尔曲线、三次贝塞尔曲线

## 核心使用

```tsx
import { Line, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _line = new Line();
  const _line1 = new Line({
    start: { x: 90, y: 90 },
    points: [70, 70],
    end: { x: 190, y: 90 },
    strokeStyle: 'red',
    lineWidth: 3,
    smooth: true,
  });
  const _line2 = new Line({
    start: { x: 100, y: 100 },
    points: [70, 70, 50, 50],
    end: { x: 300, y: 150 },
    strokeStyle: 'blue',
    lineWidth: 2,
    smooth: true,
  });

  const _line3 = new Line({
    start: { x: 300, y: 350 },
    end: { x: 100, y: 350 },
    strokeStyle: '#eee',
    lineWidth: 1,
    lineDash: [5, 5],
  });

  _stage.add(_line, _line1, _line2, _line3);
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

| name          | description          | type     | default |
| ------------- | -------------------- | -------- | ------- |
| x             | x 坐标               | number   | 0       |
| y             | y 坐标               | number   | 0       |
| start         | 起始点坐标           | object   | {}      |
| end           | 结束点坐标           | object   | {}      |
| points        | 贝塞尔曲线控制点坐标 | array    | []      |
| smooth        | 是否平滑             | boolean  | false   |
| strokeStyle   | 线条颜色             | string   | #000000 |
| lineWidth     | 线条宽度             | number   | 1       |
| lineCap       | 线条端点类型         | string   | butt    |
| lineJoin      | 线条连接类型         | string   | miter   |
| index         | 层级                 | number   | 1       |
| shadowColor   | 阴影颜色             | string   | -       |
| shadowBlur    | 阴影模糊度           | number   | -       |
| shadowOffsetX | 阴影水平偏移         | number   | -       |
| shadowOffsetY | 阴影垂直偏移         | number   | -       |
| lineDash      | 虚线样式             | []number | []      |
