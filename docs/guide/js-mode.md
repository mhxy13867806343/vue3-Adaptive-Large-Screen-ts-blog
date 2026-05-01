# JS 计算模式

JS 计算模式由 `ScreenResizer` 提供核心能力。它会读取参考容器尺寸，按设计稿尺寸计算缩放比例，再把 `width`、`height`、`transformOrigin` 和 `transform` 写到目标元素上。

## 适用场景

- 数据大屏需要跟随浏览器窗口变化。
- 大屏被嵌入到后台页面的某个容器里。
- 需要拿到 `ScaleInfo` 重新计算图表、地图或浮层。
- 需要运行时切换设计稿尺寸、缩放模式或防抖时间。

## 全局模式

`createBigScreen()` 会在浏览器环境中找到目标元素，创建 `ScreenResizer` 并启动监听。

```ts
import { createBigScreen } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';

app.use(createBigScreen({
  el: '#app',
  width: 1920,
  height: 1080,
  mode: 'fit',
  delay: 80,
}));
```

默认还会注册：

- `<BigScreenContainer />`
- `v-scale`

可以通过 `registerComponent` 和 `registerDirective` 关闭自动注册。

## 容器模式

`<BigScreenContainer />` 内部会把容器作为 `parent`，把内容层作为 `target`。

```vue
<BigScreenContainer
  :width="1920"
  :height="1080"
  mode="fit"
  :delay="80"
  background="#000"
  @resize="handleResize"
>
  <Dashboard />
</BigScreenContainer>
```

容器组件适合局部嵌入，也适合做可拖拽尺寸的预览容器。

## 底层机制

`ScreenResizer` 同时监听：

- `window.resize`
- `ResizeObserver(parent)`

这意味着窗口缩放与父容器布局变化都能触发重算。

缩放居中使用：

```ts
style.transformOrigin = '0 0';
style.transform = `translate(${tx}px, ${ty}px) scale(${scaleX}, ${scaleY})`;
```

这种方式不会把 `translate(-50%, -50%)` 与 `scale()` 混在一起，后续处理弹窗、地图坐标和鼠标位置时更容易反推真实坐标。
