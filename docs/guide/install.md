# 安装与发布状态

## npm 检查结果

已在 2026-05-01 检查 npm registry：

```bash
pnpm view @hooksvue/big-screen version --registry=https://registry.npmjs.org
```

结果为：

```text
E404 Not Found - '@hooksvue/big-screen@*' is not in this registry.
```

因此当前还不能使用：

```bash
pnpm add @hooksvue/big-screen
npm i @hooksvue/big-screen
yarn add @hooksvue/big-screen
```

## 包发布后

包发布后推荐使用 pnpm：

```bash
pnpm add @hooksvue/big-screen
```

如果使用 npm 或 yarn：

```bash
npm i @hooksvue/big-screen
yarn add @hooksvue/big-screen
```

然后在 Vue 3 项目中按需引入：

```ts
import { createBigScreen, BigScreenContainer, ScreenResizer, vScale } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';
```

纯 CSS 模式只需要：

```ts
import '@hooksvue/big-screen/css-only.css';
```

## 包发布前试用

可以从主项目仓库拉取源码：

```bash
git clone https://github.com/mhxy13867806343/vue3-Adaptive-Large-Screen-ts.git
cd vue3-Adaptive-Large-Screen-ts
pnpm install
pnpm build
pnpm dev
```

`pnpm dev` 会启动 playground，用于验证容器模式、全局模式、缩放模式、纯 CSS 模式和 `v-scale` 指令。
