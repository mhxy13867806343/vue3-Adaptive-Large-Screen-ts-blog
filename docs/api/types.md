# 类型定义

## ScaleMode

```ts
export type ScaleMode = 'fit' | 'stretch' | 'fillWidth' | 'fillHeight';
```

## ScaleInfo

```ts
export interface ScaleInfo {
  scaleX: number;
  scaleY: number;
  width: number;
  height: number;
  parentWidth: number;
  parentHeight: number;
}
```

| 字段 | 说明 |
| --- | --- |
| `scaleX` | 当前 X 方向缩放比 |
| `scaleY` | 当前 Y 方向缩放比 |
| `width` | 设计稿宽度 |
| `height` | 设计稿高度 |
| `parentWidth` | 参考容器宽度 |
| `parentHeight` | 参考容器高度 |

## ScreenResizerOptions

```ts
export interface ScreenResizerOptions {
  width?: number;
  height?: number;
  mode?: ScaleMode;
  target: HTMLElement;
  parent?: HTMLElement;
  delay?: number;
  onResize?: (info: ScaleInfo) => void;
}
```

## BigScreenPluginOptions

```ts
export interface BigScreenPluginOptions {
  el?: string;
  width?: number;
  height?: number;
  mode?: ScaleMode;
  delay?: number;
  registerComponent?: boolean;
  registerDirective?: boolean;
}
```

## ScaleDirectiveInfo

```ts
export interface ScaleDirectiveInfo {
  scaleX: number;
  scaleY: number;
  scale: number;
}
```

## ScaleDirectiveHandler

```ts
export type ScaleDirectiveHandler = (
  el: HTMLElement,
  scale: number,
  info: ScaleDirectiveInfo
) => void;
```
