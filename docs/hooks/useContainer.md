---
group:
  title: State
  order: 1

toc: content
order: 5
---

# useContainer

## 描述

一个轻量级的状态管理工具，基于 React Context 和 Hooks，用于跨组件共享状态和逻辑。

## 特性

- 基于 React Hooks
- 支持 TypeScript
- 支持类组件和函数组件
- 支持初始状态注入
- 状态引用稳定
- 简单易用

## 演示

```tsx
import { createContainer } from 'heitu';

function useTheme(props: { isGreen: boolean }) {
  const theme = props.isGreen ? 'green' : 'light';
  return { theme };
}

const Theme = createContainer(useTheme);
const ThemedComponent = () => {
  const { theme } = Theme.useContainer();
  console.log(theme, 'theme');
  return (
    <div style={{ background: theme, height: '20px', width: '20px' }}></div>
  );
};
export default () => {
  return (
    <Theme.Provider isGreen={true}>
      <ThemedComponent />
    </Theme.Provider>
  );
};
```

## API

### createContainer

```typescript
function createContainer<Value, Props = void>(
  useHook: (props: Props) => Value,
): {
  Provider: React.ComponentType<
    {
      initialState?: Partial<Value>;
      children: React.ReactNode;
    } & Props
  >;
  useContainer: () => Value;
  withContainer: <P extends object>(
    WrappedComponent: React.ComponentType<P & { container: Value }>,
  ) => React.ComponentType<P>;
  Context: React.Context<Value | null>;
};
```

### Provider Props

| 参数         | 说明                  | 类型              | 默认值 |
| ------------ | --------------------- | ----------------- | ------ |
| initialState | 初始状态              | `Partial<Value>`  | -      |
| children     | 子组件                | `React.ReactNode` | -      |
| ...props     | 传递给 useHook 的参数 | `Props`           | -      |
