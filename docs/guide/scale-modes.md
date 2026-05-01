# 缩放模式

`ScaleMode` 支持四种值：`fit`、`stretch`、`fillWidth`、`fillHeight`。

| 模式 | 行为 | 适合场景 |
| --- | --- | --- |
| `fit` | 等比缩放，取宽高比例较小值，完整显示内容 | 通用大屏，默认推荐 |
| `stretch` | 非等比缩放，宽高分别撑满容器 | 可以接受画面变形 |
| `fillWidth` | 等比缩放，以宽度为基准撑满 | 强调满宽，可能上下溢出 |
| `fillHeight` | 等比缩放，以高度为基准撑满 | 强调满高，可能左右溢出 |

## JS 模式中使用

```vue
<BigScreenContainer mode="fit">
  <Dashboard />
</BigScreenContainer>
```

运行时也可以更新：

```ts
resizer.update({ mode: 'fillWidth' });
```

## CSS 模式中使用

默认 `fit` 不需要额外类名。

```html
<div class="hbs-css-content">fit</div>
<div class="hbs-css-content hbs-mode-stretch">stretch</div>
<div class="hbs-css-content hbs-mode-fill-width">fillWidth</div>
<div class="hbs-css-content hbs-mode-fill-height">fillHeight</div>
```

## 选择建议

大多数生产大屏用 `fit`。它能保证内容完整可见，黑边区域可用 `background` 或外层背景承接。

如果必须铺满宽度，比如横向展厅屏，可以考虑 `fillWidth`。如果必须铺满高度，比如竖屏设备，可以考虑 `fillHeight`。
