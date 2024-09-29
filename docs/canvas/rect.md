---
group:
  title: 图形
  order: 2

toc: content
order: 1
---

# Rect

## 描述

基于 canvas 绘制的矩形

## 核心使用

```tsx
import { Rect, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _rect = new Rect({
    fillStyle: 'pink',
    x: 250,
    y: 100,
    width: 100,
    height: 100,
  });
  const _rect1 = new Rect({
    shadowColor: 'rgba(0, 0, 0, 0.3)', // 阴影颜色
    shadowBlur: 50, // 阴影模糊度
    shadowOffsetX: 10, // 阴影水平偏移
    shadowOffsetY: 10, // 阴影垂直偏移
    fillStyle: 'blue',
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    radius: 5,
  });

  _stage.add(_rect, _rect1);
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

| name          | description  | type                                 | default |
| ------------- | ------------ | ------------------------------------ | ------- |
| x             | x 坐标       | number                               | 0       |
| y             | y 坐标       | number                               | 0       |
| width         | 宽度         | number                               | 0       |
| height        | 高度         | number                               | 0       |
| fillStyle     | 填充颜色     | string                               | #000    |
| strokeStyle   | 描边颜色     | string                               | #000    |
| lineWidth     | 描边宽度     | number                               | 1       |
| draggable     | 是否可拖动   | (evt: MouseEvent) => void / boolean; | false   |
| index         | 层级         | number                               | 1       |
| radius        | 圆角         | number                               | -       |
| shadowColor   | 阴影颜色     | string                               | -       |
| shadowBlur    | 阴影模糊度   | number                               | -       |
| shadowOffsetX | 阴影水平偏移 | number                               | -       |
| shadowOffsetY | 阴影垂直偏移 | number                               | -       |
