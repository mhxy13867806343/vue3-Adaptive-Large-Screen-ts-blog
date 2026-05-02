# 安装

## npm 包

`@hooksvue/big-screen` 已发布到 npm，当前最新版本为 `0.1.1`。

npm 包地址：<https://www.npmjs.com/package/@hooksvue/big-screen>

推荐使用 pnpm：

```bash
pnpm add @hooksvue/big-screen
```

如果使用 npm 或 yarn：

```bash
npm i @hooksvue/big-screen
yarn add @hooksvue/big-screen
```

`vue` 是 peer dependency，业务项目需要自行安装 `vue@^3.5.0`。

## 引入

在 Vue 3 项目中按需引入：

```ts
import { createBigScreen, BigScreenContainer, ScreenResizer, vScale } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';
```

纯 CSS 模式只需要：

```ts
import '@hooksvue/big-screen/css-only.css';
```

## 本地开发源码

如果需要参与开发，可以从主项目仓库拉取源码：

```bash
git clone https://github.com/mhxy13867806343/vue3-Adaptive-Large-Screen-ts.git
cd vue3-Adaptive-Large-Screen-ts
pnpm install
pnpm build
pnpm dev
```

`pnpm dev` 会启动 playground，用于验证容器模式、全局模式、缩放模式、纯 CSS 模式和 `v-scale` 指令。
