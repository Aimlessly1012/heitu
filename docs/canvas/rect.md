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
    y: 250,
    width: 100,
    height: 100,
  });

  _stage.add(_rect);
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

| name        | description | type                                 | default |
| ----------- | ----------- | ------------------------------------ | ------- |
| x           | x 坐标      | number                               | 0       |
| y           | y 坐标      | number                               | 0       |
| width       | 宽度        | number                               | 0       |
| height      | 高度        | number                               | 0       |
| fillStyle   | 填充颜色    | string                               | #000    |
| strokeStyle | 描边颜色    | string                               | #000    |
| lineWidth   | 描边宽度    | number                               | 1       |
| draggable   | 是否可拖动  | (evt: MouseEvent) => void / boolean; | false   |
| index       | 层级        | number                               | 1       |
