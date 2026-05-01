# 在线 Playground

主项目已经提供在线 playground：

<https://mhxy13867806343.github.io/vue3-Adaptive-Large-Screen-ts/>

页面是一个完整的 1920x1080 运营数据监控中心，用来验证库的核心能力。

## 可验证能力

- JS 计算模式和纯 CSS 模式切换。
- 容器模式和全局模式切换。
- `fit`、`stretch`、`fillWidth`、`fillHeight` 四种缩放模式。
- 设计稿尺寸输入与常用预设。
- resize 防抖时间调整。
- 容器背景色调整。
- `.resize()`、`.destroy()`、`reset` 方法调用。
- 可拖拽 holder 容器，验证父容器尺寸变化。
- `v-scale` 指令示例，实时查看 `scale`、`scaleX`、`scaleY` 和元素尺寸。
- `data` prop 示例，展示 `{ name, value, format? }` 数据结构。

## 本地启动

在主项目仓库中运行：

```bash
pnpm install
pnpm dev
```

默认会启动 playground：

```text
http://localhost:5174
```

## 构建

```bash
pnpm build:playground
```

主项目还包含 GitHub Pages 工作流，推送 `main` 后会自动构建 playground 预览。
