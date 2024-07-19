import { defineConfig } from 'dumi';
const repo = 'heitu-hook';
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'heitu-hook',
  },
  mfsu: false,
  // runtimePublicPath: {},
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
