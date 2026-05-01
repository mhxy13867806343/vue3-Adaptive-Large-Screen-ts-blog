# ScreenResizer

`ScreenResizer` 是纯 JS 核心类，不依赖 Vue。Vue 组件和插件都基于它实现。

## 构造函数

```ts
import { ScreenResizer } from '@hooksvue/big-screen';

const resizer = new ScreenResizer({
  target: document.querySelector('#screen')!,
  parent: document.querySelector('#holder')!,
  width: 1920,
  height: 1080,
  mode: 'fit',
  delay: 80,
  onResize: (info) => console.log(info),
});

resizer.start();
```

## Options

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `target` | `HTMLElement` | 必填 | 被缩放的目标元素 |
| `parent` | `HTMLElement` | `undefined` | 参考容器；不传则使用窗口尺寸 |
| `width` | `number` | `1920` | 设计稿宽度 |
| `height` | `number` | `1080` | 设计稿高度 |
| `mode` | `ScaleMode` | `'fit'` | 缩放模式 |
| `delay` | `number` | `80` | resize 防抖时间，单位 ms |
| `onResize` | `(info: ScaleInfo) => void` | `undefined` | 缩放完成回调 |

## Methods

| 方法 | 说明 |
| --- | --- |
| `start()` | 启动监听并立即缩放一次 |
| `resize()` | 同步触发一次缩放 |
| `update(options)` | 运行时更新 `width`、`height`、`mode`、`delay`、`onResize` |
| `destroy()` | 销毁监听并还原内联样式 |

## update

```ts
resizer.update({
  width: 2560,
  height: 1440,
  mode: 'fillWidth',
});
```

`target` 和 `parent` 不支持通过 `update()` 修改。如果需要切换目标元素，请销毁后重新创建实例。

## resize 事件

每次 `resize()` 完成后，除了执行 `onResize`，还会派发全局事件：

```ts
window.addEventListener('hbs-resize', (event) => {
  console.log((event as CustomEvent).detail);
});
```

`v-scale` 会监听这个事件，确保 transform 缩放变化后图表元素能同步刷新。
