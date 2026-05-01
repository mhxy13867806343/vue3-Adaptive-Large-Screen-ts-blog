# BigScreenContainer

`<BigScreenContainer />` 是 Vue 容器组件，适合在页面局部嵌入大屏。它会创建外层 `.hbs-container` 和内容层 `.hbs-content`，并在内部启动 `ScreenResizer`。

## Props

| Prop | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `width` | `number` | `1920` | 设计稿宽度 |
| `height` | `number` | `1080` | 设计稿高度 |
| `mode` | `ScaleMode` | `'fit'` | 缩放模式 |
| `delay` | `number` | `80` | resize 防抖时间，单位 ms |
| `background` | `string` | `'#000'` | 外层填充色，常用于黑边区域 |

## Events

| 事件 | 载荷 | 说明 |
| --- | --- | --- |
| `resize` | `ScaleInfo` | 每次缩放计算完成后触发 |

## Expose

通过 `ref` 可以调用：

| 方法 | 说明 |
| --- | --- |
| `resize()` | 立即重新计算缩放 |
| `destroy()` | 销毁底层引擎并还原内联样式 |
| `getResizer()` | 获取底层 `ScreenResizer` 实例 |

## 示例

```vue
<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { BigScreenContainer } from '@hooksvue/big-screen';
import type { ScaleInfo } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';

const screenRef = useTemplateRef<{
  resize(): void;
  destroy(): void;
}>('screen');

function handleResize(info: ScaleInfo) {
  console.log(info);
}
</script>

<template>
  <BigScreenContainer
    ref="screen"
    :width="1920"
    :height="1080"
    mode="fit"
    background="#050a1a"
    @resize="handleResize"
  >
    <Dashboard />
  </BigScreenContainer>
</template>
```
