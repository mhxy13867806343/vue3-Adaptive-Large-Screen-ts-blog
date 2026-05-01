import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '@hooksvue/big-screen',
  description: '轻量、零 UI 依赖的 Vue 3 大屏自适应库文档',
  lang: 'zh-CN',
  base: '/vue3-Adaptive-Large-Screen-ts-blog/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f172a' }],
    ['meta', { name: 'keywords', content: 'Vue3, 大屏适配, VitePress, ScreenResizer, 数据可视化' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '@hooksvue/big-screen',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: 'API', link: '/api/component' },
      { text: 'Playground', link: '/playground' },
      {
        text: '相关链接',
        items: [
          { text: 'GitHub 仓库', link: 'https://github.com/mhxy13867806343/vue3-Adaptive-Large-Screen-ts' },
          { text: '在线 Playground', link: 'https://mhxy13867806343.github.io/vue3-Adaptive-Large-Screen-ts/' },
        ],
      },
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '为什么需要它', link: '/' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装与发布状态', link: '/guide/install' },
          { text: '在线演示', link: '/playground' },
        ],
      },
      {
        text: '使用指南',
        items: [
          { text: 'JS 计算模式', link: '/guide/js-mode' },
          { text: '纯 CSS 模式', link: '/guide/css-only' },
          { text: '缩放模式', link: '/guide/scale-modes' },
          { text: '图表适配', link: '/guide/charts' },
          { text: '常见问题', link: '/guide/faq' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'BigScreenContainer', link: '/api/component' },
          { text: 'createBigScreen', link: '/api/plugin' },
          { text: 'ScreenResizer', link: '/api/screen-resizer' },
          { text: 'v-scale', link: '/api/directive' },
          { text: '类型定义', link: '/api/types' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mhxy13867806343/vue3-Adaptive-Large-Screen-ts' },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © hooksvue',
    },
    outline: {
      level: [2, 3],
      label: '本页目录',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
  },
});
