---
group:
  title: State
  order: 1

toc: content
order: 4
---

# useLocalStorage

## 描述

LocalStorage 简便操作

## 正在建设中

## 演示

```tsx
import { useLocalStorage } from 'heitu';

const Index = () => {
  const [value, setValue, remove] = useLocalStorage('my-key', 'foo');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
export default Index;
```

## Arguments

| name         | description | type   | default |
| ------------ | ----------- | ------ | ------- |
| key          | key         | string | -       |
| defaultValue | 默认值      | any    | -       |

## return

| name     | description | type                 | default |
| -------- | ----------- | -------------------- | ------- |
| value    | value       | any                  | -       |
| setValue | 设置值      | (value: any) => void | -       |
| remove   | 清空        | () => void           | -       |
