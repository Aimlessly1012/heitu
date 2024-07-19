# useInView

## 描述

## 演示

<!-- <code src="./demo.tsx" description="demo 描述"></code> -->

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

## Option

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
|      |             |      |         |
