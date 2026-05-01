# 纯 CSS 模式

纯 CSS 模式由 `css-only.css` 提供，不需要创建 JS 实例，也不依赖 `ResizeObserver`。

## 引入

```ts
import '@hooksvue/big-screen/css-only.css';
```

## 全屏模式

全屏模式基于 `vw` 和 `vh`。

```html
<div class="hbs-css-viewport" style="--hbs-w:1920;--hbs-h:1080;">
  <div class="hbs-css-content">
    <Dashboard />
  </div>
</div>
```

## 容器模式

容器模式基于 container queries。

```html
<div class="hbs-css-container" style="--hbs-w:1920;--hbs-h:1080;">
  <div class="hbs-css-content">
    <Dashboard />
  </div>
</div>
```

## 切换缩放模式

默认是 `fit`。其他模式通过给 `.hbs-css-content` 添加修饰类切换。

```html
<div class="hbs-css-content hbs-mode-stretch">...</div>
<div class="hbs-css-content hbs-mode-fill-width">...</div>
<div class="hbs-css-content hbs-mode-fill-height">...</div>
```

## 原理

CSS 使用 `tan(atan2(L, L))` 把长度比转换成无单位数字，例如：

```css
--hbs-scale-x: tan(atan2(100vw, calc(var(--hbs-w) * 1px)));
--hbs-scale-y: tan(atan2(100vh, calc(var(--hbs-h) * 1px)));
```

然后交给 `transform: scale()`。

## 浏览器要求

纯 CSS 模式使用 CSS 三角函数、`@property` 和 container queries，建议浏览器版本：

| 浏览器 | 最低版本 |
| --- | --- |
| Chrome | 111+ |
| Safari | 15.4+ |
| Firefox | 108+ |

如果目标环境较复杂，优先使用 JS 计算模式。
