# useElementSize

## 描述

获取元素是否在可视范围内的 hook

## 演示

<!-- <code src="./demo.tsx" description="demo 描述"></code> -->

```tsx
import React, { useRef, useEffect } from 'react';
import { useElementSize } from 'heitu-hook';
import { Input } from 'antd';

export default () => {
  const ref = useRef(null);
  const size = useElementSize(ref);
useEffect(() => {console.log(ref.current.mount)},[])
  return (
    <div>
      <textarea
        ref={ref}
        disabled
        style={{ width: 200, height: 200 }}
        value={`width: ${size.width}\nheight: ${size.height}`}
      />
    </div>
  );
};
```

## Arguments

| name        | description            | type                     | default                                        |
| ----------- | ---------------------- | ------------------------ | ---------------------------------------------- |


## return

| name      | description              | type                                        | default |
| --------- | ------------------------ | ------------------------------------------- | ------- |

