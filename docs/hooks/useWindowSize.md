---
group:
  title: Element
  order: 2

toc: content
order: 5
---

# useWindowSize

## 描述

获取 window 尺寸

## 演示

```tsx
import { useWindowSize } from 'heitu';
const Index =()=>{
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        width: {width}, height: {height}
      </p>
    </div>
  );
}
export default Index
```

## Arguments

| name | description | type | default |
| ---- | ----------- | ---- | ------- |

## return

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
