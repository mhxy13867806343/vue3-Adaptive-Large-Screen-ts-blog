---
layout: home

hero:
  name: '@hooksvue/big-screen'
  text: Vue 3 大屏自适应库
  tagline: 轻量、零 UI 依赖，同时提供 JS 计算模式与纯 CSS 模式，适合 1920x1080、2K、4K、竖屏等数据可视化大屏。
  image:
    src: /logo.svg
    alt: '@hooksvue/big-screen'
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看 Playground
      link: https://mhxy13867806343.github.io/vue3-Adaptive-Large-Screen-ts/
    - theme: alt
      text: GitHub
      link: https://github.com/mhxy13867806343/vue3-Adaptive-Large-Screen-ts

features:
  - title: 双技术方案
    details: ScreenResizer 负责运行时精确计算，css-only.css 负责 0 JS 的轻量场景。
  - title: 双驱动模式
    details: 既可以用 createBigScreen 接管整个页面，也可以用 BigScreenContainer 局部嵌入。
  - title: 与 Vue 解耦
    details: 核心 ScreenResizer 是纯 JS 类，可脱离 Vue 使用，也便于迁移到其他前端项目。
  - title: 图表友好
    details: v-scale 指令会写入缩放 CSS 变量、派发 adapt-scale 事件，也支持回调函数。
  - title: 运行时可调
    details: width、height、mode、delay 支持运行时更新，并提供 resize、update、destroy 生命周期方法。
  - title: 产物拆分
    details: JS 模式样式 style.css 与纯 CSS 模式 css-only.css 独立导出，可按需引入。
---

## 适合什么场景

`@hooksvue/big-screen` 面向“按设计稿尺寸制作，再自动适配不同屏幕或容器”的数据大屏项目。典型设计稿是 `1920x1080`，页面里通常包含 KPI 卡片、图表、表格、地图或状态面板。

如果你的页面需要在不同分辨率中保持设计稿比例，优先使用 JS 计算模式。如果页面内容静态、只需要纯 CSS 缩放，可以使用 `css-only.css`。

## 当前发布状态

截至 2026-05-01，npm registry 尚未发布 `@hooksvue/big-screen`，`pnpm view @hooksvue/big-screen --registry=https://registry.npmjs.org` 返回 `E404`。包发布前可以先从源码仓库本地构建或通过 Git URL 方式试用。

正式包发布后，再使用：

```bash
pnpm add @hooksvue/big-screen
# or
npm i @hooksvue/big-screen
yarn add @hooksvue/big-screen
```

## 资料来源

本文档根据主项目源码、README、CHANGELOG 与在线 Playground 编写。

- 主项目：<https://github.com/mhxy13867806343/vue3-Adaptive-Large-Screen-ts>
- 在线 Playground：<https://mhxy13867806343.github.io/vue3-Adaptive-Large-Screen-ts/>
