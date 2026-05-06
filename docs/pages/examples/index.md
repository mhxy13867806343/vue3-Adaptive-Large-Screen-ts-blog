<script setup lang="ts">
import DynamicFormExample from '../../.vitepress/theme/components/DynamicFormExample.vue';
</script>

# 动态表单示例

这个页面演示同一个配置面板在切换业务类型时，动态展示不同的表单内容。示例包含音乐播放器、歌单列表和文件夹树三种场景，适合放进大屏控制面板、后台配置页、资源管理器或低代码编辑器。

<DynamicFormExample />

## 配置思路

把业务类型作为顶层字段，例如 `type: 'musicPlayer' | 'playlist' | 'folderTree'`。表单渲染层根据 `type` 切换不同字段组，提交时再把当前类型对应的数据结构传给业务组件。

```ts
type DynamicFormType = 'musicPlayer' | 'playlist' | 'folderTree';

interface DynamicFormState {
  type: DynamicFormType;
  payload: Record<string, unknown>;
}
```

这种结构适合做大屏编辑器、低代码面板、资源管理器和播放器配置页。
