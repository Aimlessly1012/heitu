---
nav: 
  title: Tools
  order: 3
---

# Tools

## 描述
- 类似nest创建模板文件一样 创建前端模块文件
- 一般用于编写新需求 大量生成 新文件 快速开发
- 支持批量生成 输入文件名称以逗号分割

## 使用 
```
npx heitu

? 请输入您的文件名以逗号分隔: home,login,register


? 请选择一个模块完成生成: (Use arrow keys)
❯ renderModule
  hook
  quit
  <!-- 选择 hook 直接生成，选择 renderModule进入样式选择 -->

? 请选择一个模块完成生成: (Use arrow keys)
❯ css
  scss
  less
  tailwind
  quit
 <!-- 选择 后 直接生成 -->
```
- 可以选择 渲染模板 和 hook模板
  - 渲染模板 包含index.tsx /style /interface.ts 渲染层模板
    - 样式模板支持 css / less / scss / tailwind (不生成样式)
  - 渲染模板 包含 index.tsx /interface.d.ts 渲染层模板

## 如有 添加 请联系我
- 微信  Im_Peco