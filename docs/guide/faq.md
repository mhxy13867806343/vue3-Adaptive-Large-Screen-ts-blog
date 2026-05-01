# 常见问题

## 为什么内容缩在左上角

业务内容根节点没有撑满 `.hbs-content`。应使用：

```css
.dashboard {
  width: 100%;
  height: 100%;
}
```

不要在业务根节点写死：

```css
.dashboard {
  width: 1920px;
  height: 1080px;
}
```

## 为什么 `pnpm add @hooksvue/big-screen` 失败

截至 2026-05-01，npm registry 尚未发布该包，安装会返回 `E404`。包发布前请从源码仓库本地构建或使用 Git URL 方式试用。

## JS 模式和 CSS 模式怎么选

需要 resize 回调、运行时更新参数、图表适配或复杂容器监听时，选 JS 模式。

静态页面、现代浏览器、只想要零 JS 缩放时，可以选纯 CSS 模式。

## 为什么纯 CSS 模式在旧浏览器不可用

纯 CSS 模式依赖 CSS 三角函数、`@property` 与 container queries。旧浏览器不完整支持这些能力，建议换 JS 模式。

## 全局插件会不会重复初始化

`createBigScreen()` 内部会保存全局实例。重复初始化时会先销毁旧实例，再创建新实例。
