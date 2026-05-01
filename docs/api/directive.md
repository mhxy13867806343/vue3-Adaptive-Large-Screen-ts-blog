# v-scale

`v-scale` 用于读取元素经过 `transform: scale()` 后的有效缩放比例，适合图表、地图、浮层等需要感知缩放的元素。

## 自动模式

```vue
<template>
  <div style="width: 500px; height: 400px;" v-scale />
</template>
```

指令会写入 CSS 变量：

| 变量 | 说明 |
| --- | --- |
| `--hbs-adapt-scale` | 等比场景常用缩放比，取 `scaleX` 与 `scaleY` 的较小值 |
| `--hbs-adapt-scale-x` | X 方向有效缩放比 |
| `--hbs-adapt-scale-y` | Y 方向有效缩放比 |

同时写入 `data-hbs-adapt-scale`，并派发 `adapt-scale` 事件。

## 回调模式

```vue
<script setup lang="ts">
function handleScale(el: HTMLElement, scale: number, info: { scaleX: number; scaleY: number; scale: number }) {
  console.log(el, scale, info);
}
</script>

<template>
  <div v-scale="handleScale" />
</template>
```

## 手动注册

`createBigScreen()` 默认注册 `v-scale`。按需使用时也可以手动注册：

```ts
import { createApp } from 'vue';
import { vScale } from '@hooksvue/big-screen';

createApp(App).directive('scale', vScale).mount('#app');
```

## 监听事件

```ts
el.addEventListener('adapt-scale', (event) => {
  const info = (event as CustomEvent).detail;
  console.log(info.scale, info.scaleX, info.scaleY);
});
```

## 生命周期

指令挂载后会监听元素、父元素、窗口和 `hbs-resize`。卸载时会移除监听、清理 CSS 变量和 dataset。
