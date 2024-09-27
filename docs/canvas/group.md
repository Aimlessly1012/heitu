---
group:
  title: 图形
  order: 2

toc: content
order: 3
---

# Group

## 描述

将多个图形编组

## 核心使用

```tsx
import { Group, Text, Circle, Rect, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const container = useRef<HTMLElement | null>(null);

  const _stage = new Stage();
  const _text = new Text({
    content: 'title',
    x: 110,
    y: 260,
    index: 999,
  });
  const _text1 = new Text({
    content: 'name: test',
    x: 110,
    y: 280,
    index: 999,
  });
  const _group = new Group({});

  const _group1 = new Group({ draggable: true });
  const _circle1 = new Circle({
    x: 100,
    y: 100,
    radius: 50,
    fillStyle: 'pink',
    lineWidth: 1,
    border: 0,
  });
  const _rect = new Rect({
    fillStyle: 'blue',
    x: 150,
    y: 100,
    width: 100,
    height: 100,
  });
  const _rect1 = new Rect({
    fillStyle: '#eee',
    x: 100,
    y: 250,
    width: 200,
    height: 100,
  });
  _group.add(_circle1, _rect);
  _group1.add(_rect1, _text, _text1);
  _stage.add(_group, _group1);

  useLayoutEffect(() => {
    _stage.buildContentDOM({
      container: container.current,
      backgroundColor: '#fff',
    });
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
