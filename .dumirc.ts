import { defineConfig } from 'dumi';


export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'HeiTu',
    logo: '/HeiTu.png',
    prefersColor: { default: 'dark', switch: false },
  },
  mfsu: false,
  // runtimePublicPath: {},
  base: '/',
  publicPath: '/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
});
