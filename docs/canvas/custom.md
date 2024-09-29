---
group:
  title: 图形
  order: 2

toc: content
order: 5
---

# Custom

## 描述

基于 canvas 绘制的圆形圆弧

## 核心使用

```tsx
import { Custom, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  // 创建 Path2D 对象
  const heart = new Path2D();

  // 绘制爱心
  heart.moveTo(200, 240); // 起始点
  heart.bezierCurveTo(200, 200, 120, 150, 120, 200); // 左侧上半部分
  heart.bezierCurveTo(120, 280, 200, 300, 200, 340); // 左侧下半部分
  heart.bezierCurveTo(200, 300, 280, 280, 280, 200); // 右侧下半部分
  heart.bezierCurveTo(280, 150, 200, 200, 200, 240); // 右侧上半部分
  const _custom = new Custom({ path2D: heart });
  _stage.add(_custom);

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

| name          | description         | type   | default |
| ------------- | ------------------- | ------ | ------- |
| path2D        | 自定义图形的 Path2D | Path2D | -       |
| shadowColor   | 阴影颜色            | string | -       |
| shadowBlur    | 阴影模糊度          | number | -       |
| shadowOffsetX | 阴影水平偏移        | number | -       |
| shadowOffsetY | 阴影垂直偏移        | number | -       |
