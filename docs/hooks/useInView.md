---
group:
  title: Element
  order: 2

toc: content
order: 3
---
# useInView

## 描述

获取元素是否在可视范围内的 hook

## 演示



```tsx
import React, { LegacyRef, useEffect } from 'react';
import { useInView } from 'heitu-hook';

export default () => {
  const [targetRef, inView] = useInView();
  return (
    <div>
      <div>{inView ? 'active' : 'inactive'}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '900px',
        }}
      >
        <div ref={targetRef as LegacyRef<HTMLDivElement>}>12312312</div>
      </div>
    </div>
  );
};
```

## Arguments

| name    | description              | type                     | default                                        |
|---------|--------------------------|--------------------------|------------------------------------------------|
| options | 绑定元素的基础用作依赖 | IntersectionObserverInit | { root: null,rootMargin: '0px',threshold: 1,}, |
| triggerOnce  | 触发一次         | boolean                  | false                                          |

## return

| name      | description              | type                                     | default |
|-----------|--------------------------|------------------------------------------|---------|
| targetRef | 用于绑定所作用元素的 ref | React.MutableRefObject<'HTMLElement' ,null> | -       |
| inView    | 是否在可视范围内         | boolean                                  | false   |
