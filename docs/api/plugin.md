# createBigScreen

`createBigScreen(options)` 返回一个 Vue plugin，用于全局接管页面根节点。

## Options

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `el` | `string` | `'#app'` | 被接管的根选择器 |
| `width` | `number` | `1920` | 设计稿宽度 |
| `height` | `number` | `1080` | 设计稿高度 |
| `mode` | `ScaleMode` | `'fit'` | 缩放模式 |
| `delay` | `number` | `80` | resize 防抖时间，单位 ms |
| `registerComponent` | `boolean` | `true` | 是否注册全局组件 `<BigScreenContainer />` |
| `registerDirective` | `boolean` | `true` | 是否注册全局指令 `v-scale` |

## 示例

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { createBigScreen } from '@hooksvue/big-screen';
import '@hooksvue/big-screen/style.css';

createApp(App)
  .use(createBigScreen({
    el: '#app',
    width: 1920,
    height: 1080,
    mode: 'fit',
    delay: 80,
  }))
  .mount('#app');
```

## 只注册组件和指令

如果不想全局缩放根节点，可以关闭接管逻辑相关能力，直接按需导入组件和指令。也可以使用 Vue 原生方式手动注册：

```ts
import { BigScreenContainer, vScale } from '@hooksvue/big-screen';

app.component('BigScreenContainer', BigScreenContainer);
app.directive('scale', vScale);
```

## 重复初始化

插件内部会在 `window` 上保存当前 `ScreenResizer` 实例。重复调用时会先销毁旧实例，再创建新实例。
