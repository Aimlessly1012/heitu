import { defineConfig } from 'dumi';
const repo = 'heitu-hook'; // 项目名

export default defineConfig({
  title: 'heitu-hook',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'HeiTu',
  },
  alias: {
    'heitu-hook': require.resolve(__dirname + '/src'),
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  mfsu: false
});
