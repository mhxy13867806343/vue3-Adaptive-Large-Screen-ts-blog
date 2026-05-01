# 图表适配

大屏里最常见的问题是图表容器被 `transform: scale()` 缩放后，图表库仍然按未缩放尺寸理解画布。`v-scale` 指令用于让图表元素感知有效缩放。

## 基础用法

```vue
<template>
  <div ref="chartRef" class="chart" v-scale />
</template>
```

指令会写入：

- `--hbs-adapt-scale`
- `--hbs-adapt-scale-x`
- `--hbs-adapt-scale-y`
- `data-hbs-adapt-scale`

并派发 `adapt-scale` 自定义事件。

## 回调用法

```vue
<script setup lang="ts">
import type { ScaleDirectiveInfo } from '@hooksvue/big-screen';

function handleScale(el: HTMLElement, scale: number, info: ScaleDirectiveInfo) {
  console.log(scale, info.scaleX, info.scaleY);
}
</script>

<template>
  <div style="width: 500px; height: 400px;" v-scale="handleScale" />
</template>
```

## 与 ECharts 配合

常见处理是监听缩放后调用图表实例的 `resize()`：

```ts
function handleScale() {
  chartInstance?.resize();
}
```

如果 tooltip、坐标点或浮层需要做额外修正，可以使用 `scale`、`scaleX`、`scaleY` 反推坐标。

## 触发时机

`v-scale` 会在以下场景更新：

- 元素自身尺寸变化。
- 父元素尺寸变化。
- `window.resize`。
- `ScreenResizer.resize()` 派发的 `hbs-resize` 事件。
