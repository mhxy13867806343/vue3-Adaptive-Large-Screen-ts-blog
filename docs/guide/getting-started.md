# 快速开始

本库有两条主线：JS 计算模式和纯 CSS 模式。日常项目优先选择 JS 计算模式，因为它能监听窗口与父容器变化，并把缩放信息回传给业务。

## 安装

::: warning 当前 npm 包尚未发布
截至 2026-05-01，`@hooksvue/big-screen` 在 npm registry 返回 `E404`。下面命令是包发布后的正式安装方式；包发布前请参考 [安装与发布状态](/guide/install)。
:::

```bash
pnpm add @hooksvue/big-screen
# or
npm i @hooksvue/big-screen
yarn add @hooksvue/big-screen
```

`vue` 是 peer dependency，业务项目需要自行安装 `vue@^3.5.0`。

## 全局接管

适合单页大屏应用，插件会接管 `#app` 并自动注册 `<BigScreenContainer />` 和 `v-scale`。

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { createBigScreen } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';

createApp(App)
  .use(createBigScreen({
    el: '#app',
    width: 1920,
    height: 1080,
    mode: 'fit',
  }))
  .mount('#app');
```

## 局部容器

适合后台系统、仪表盘或某个区域内嵌大屏。

```vue
<script setup lang="ts">
import { BigScreenContainer } from '@hooksvue/big-screen';
import type { ScaleInfo } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';

function onResize(info: ScaleInfo) {
  console.log(info.scaleX, info.scaleY);
}
</script>

<template>
  <BigScreenContainer
    :width="1920"
    :height="1080"
    mode="fit"
    background="#050a1a"
    @resize="onResize"
  >
    <Dashboard />
  </BigScreenContainer>
</template>
```

::: tip 内容根节点必须撑满容器
`<Dashboard />` 的根节点建议设置 `width: 100%; height: 100%;`。不要在业务根节点写死 `1920px` 和 `1080px`，否则切换设计稿尺寸时会缩在左上角。
:::

## 纯 CSS 模式

适合静态展示、不需要 resize 回调的场景。

```ts
import '@hooksvue/big-screen/css-only.css';
```

```html
<div class="hbs-css-viewport" style="--hbs-w:1920;--hbs-h:1080;">
  <div class="hbs-css-content">
    <Dashboard />
  </div>
</div>
```

下一步可以继续阅读 [JS 计算模式](/guide/js-mode) 或 [纯 CSS 模式](/guide/css-only)。
