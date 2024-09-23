---
group:
  title: Element
  order: 2

toc: content
order: 6
---

# useImageLoad

## 描述

用于 获取 img 加载状态, 支持传入图片的数组 逐个检查状态展示 可加载的，如果都不成功返回 裂图图片

- 注：异步的!!!

## 演示

```tsx
import React from 'react';
import { useImageLoad } from 'heitu';

export default () => {
  const list = [
    'https://www.yhwxj.com/wp-content/uploads/2022/08/2022081509213479.png',
    'https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_640.jpg',
    'http://whhysz.com/upload/20210507/6094e47dce9c1.jpg',
  ];
  const [img, ftimgList, allowImgList, loading] = useImageLoad({
    imgList: list,
  });
  return (
    <div style={{ display: 'flex' }}>
      {loading ? (
        'loading'
      ) : (
        <>
          <div>
            <div>img</div>
            <img src={img} style={{ width: 200 }} />
          </div>
          <div>
            <div>ftimgList</div>
            {ftimgList?.map((item, index) => (
              <img src={item} key={index} style={{ width: 200 }} />
            ))}
          </div>
          <div>
            <div>allowImgList</div>
            {allowImgList?.map((item, index) => (
              <img src={item} key={index} style={{ width: 200 }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
```

## Arguments

| name    | description                          | type     | default |
| ------- | ------------------------------------ | -------- | ------- |
| imgList | 图片数组(需要查询是否可展示数组列表) | string[] | -       |

## return

| name         | description                                                | type     | default |
| ------------ | ---------------------------------------------------------- | -------- | ------- |
| img          | 图片地址(按照数组顺序能展现的图片)                         | string   | -       |
| ftimgList    | 图片数组（会将不能展示的图片改为加载失败显示图像占位符。） | string[] | -       |
| allowImgList | 图片数组（只将可以展示图片返回）                           | string[] | -       |
