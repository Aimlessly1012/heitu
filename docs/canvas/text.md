---
group:
  title: 图形
  order: 2

toc: content
order: 4
---

# Text

## 描述

基于 canvas 绘制的文字

## 核心使用

```tsx
import { Text, Stage, useResizeObserver } from 'heitu';
import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const _stage = new Stage();
  const container = useRef<HTMLElement | null>(null);
  const _text = new Text({
    content: 'xixinia',
    index: 999,
    x: 250,
    y: 250,
  });
  _stage.add(_text);
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

| name           | description      | type            | default            |
| -------------- | ---------------- | --------------- | ------------------ |
| x              | x 坐标           | number          | 0                  |
| y              | y 坐标           | number          | 0                  |
| content        | 文本内容         | string          | ''                 |
| fontSize       | 字体大小         | number          | 16                 |
| textAlign      | 文字对齐         | CanvasTextAlign |                    |
| textBaseline   | 文字基准线       | string          | CanvasTextBaseline |
| direction      | 文本方向         | string          | -                  |
| fontStyle      | 文字颜色         | string          | #333               |
| fontVariant    | 字体变体         | string          | -                  |
| textDecoration | 文本修饰         | string          | -                  |
| align          | 文本对齐方式     | string          | -                  |
| verticalAlign  | 文本垂直对齐方式 | string          | -                  |
| padding        | 文本内边距       | number          | 0                  |
| lineHeight     | 行高             | number          | 1                  |
| letterSpacing  | 字符间距         | number          | 0                  |
| index          | 层级             | number          | -                  |
