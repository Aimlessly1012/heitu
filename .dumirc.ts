import { defineConfig } from 'dumi';
// const repo = 'heitu-hook';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'HeiTu',
    editLink: false,
    logo: process.env.NODE_ENV === 'production' ? `/HeiTu.png` : '/HeiTu.png',
    prefersColor: { default: 'dark', switch: false },
  },
  mfsu: false,
  // runtimePublicPath: {},
  base: process.env.NODE_ENV === 'production' ? `/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/` : '/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
});
