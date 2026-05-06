<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

type SceneKey = 'musicPlayer' | 'playlist' | 'folderTree';

interface TreeNode {
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
}

const activeScene = ref<SceneKey>('musicPlayer');

const scenes: Array<{
  key: SceneKey;
  label: string;
  description: string;
}> = [
  {
    key: 'musicPlayer',
    label: '音乐播放器',
    description: '展示播放器标题、艺人、播放模式、音量和歌词面板等配置。',
  },
  {
    key: 'playlist',
    label: '歌单列表',
    description: '展示歌单卡片、歌曲列表、排序方式和推荐标签配置。',
  },
  {
    key: 'folderTree',
    label: '文件夹树',
    description: '展示目录树、默认展开层级、节点选择和文件展示规则。',
  },
];

const musicForm = reactive({
  title: '星河巡航',
  artist: 'Hooksvue Studio',
  cover: '科技蓝渐变封面',
  mode: 'loop',
  volume: 72,
  showLyrics: true,
});

const playlistForm = reactive({
  name: '大屏开发 BGM',
  owner: 'hooksvue',
  layout: 'grid',
  sortBy: 'hot',
  tags: ['工作流', '夜间', '电子'],
  tracks: [
    { name: 'Blueprint Pulse', duration: '03:42' },
    { name: 'Data Stream', duration: '04:16' },
    { name: 'Silent Dashboard', duration: '02:58' },
  ],
});

const folderForm = reactive({
  rootName: '项目资源',
  defaultExpandLevel: 2,
  selectable: true,
  showFileCount: true,
  tree: [
    {
      name: 'audio',
      type: 'folder',
      children: [
        { name: 'intro.mp3', type: 'file' },
        { name: 'loop.wav', type: 'file' },
      ],
    },
    {
      name: 'playlist',
      type: 'folder',
      children: [
        { name: 'daily.json', type: 'file' },
        { name: 'favorites.json', type: 'file' },
      ],
    },
    {
      name: 'covers',
      type: 'folder',
      children: [
        { name: 'hero.png', type: 'file' },
        { name: 'album.png', type: 'file' },
      ],
    },
  ] as TreeNode[],
});

const activeSceneMeta = computed(() => scenes.find((item) => item.key === activeScene.value)!);

const previewTitle = computed(() => {
  if (activeScene.value === 'musicPlayer') return musicForm.title;
  if (activeScene.value === 'playlist') return playlistForm.name;
  return folderForm.rootName;
});

function switchScene(key: SceneKey) {
  activeScene.value = key;
}
</script>

<template>
  <div class="example-shell">
    <aside class="scene-list" aria-label="动态表单场景">
      <button
        v-for="scene in scenes"
        :key="scene.key"
        class="scene-button"
        :class="{ active: activeScene === scene.key }"
        type="button"
        @click="switchScene(scene.key)"
      >
        <span>{{ scene.label }}</span>
        <small>{{ scene.description }}</small>
      </button>
    </aside>

    <section class="form-panel" aria-live="polite">
      <div class="panel-heading">
        <p>当前类型</p>
        <h2>{{ activeSceneMeta.label }}</h2>
        <span>{{ activeSceneMeta.description }}</span>
      </div>

      <form v-if="activeScene === 'musicPlayer'" class="dynamic-form">
        <label>
          歌曲标题
          <input v-model="musicForm.title" type="text">
        </label>
        <label>
          艺人
          <input v-model="musicForm.artist" type="text">
        </label>
        <label>
          封面描述
          <input v-model="musicForm.cover" type="text">
        </label>
        <label>
          播放模式
          <select v-model="musicForm.mode">
            <option value="loop">列表循环</option>
            <option value="single">单曲循环</option>
            <option value="random">随机播放</option>
          </select>
        </label>
        <label>
          音量 {{ musicForm.volume }}%
          <input v-model.number="musicForm.volume" type="range" min="0" max="100">
        </label>
        <label class="checkbox-row">
          <input v-model="musicForm.showLyrics" type="checkbox">
          展示歌词面板
        </label>
      </form>

      <form v-else-if="activeScene === 'playlist'" class="dynamic-form">
        <label>
          歌单名称
          <input v-model="playlistForm.name" type="text">
        </label>
        <label>
          创建者
          <input v-model="playlistForm.owner" type="text">
        </label>
        <label>
          展示布局
          <select v-model="playlistForm.layout">
            <option value="grid">网格卡片</option>
            <option value="list">紧凑列表</option>
            <option value="rank">排行列表</option>
          </select>
        </label>
        <label>
          排序方式
          <select v-model="playlistForm.sortBy">
            <option value="hot">热度优先</option>
            <option value="new">最新优先</option>
            <option value="name">名称排序</option>
          </select>
        </label>
        <div class="tag-editor">
          <span>推荐标签</span>
          <div class="tag-list">
            <button
              v-for="tag in playlistForm.tags"
              :key="tag"
              class="tag-pill"
              type="button"
            >
              {{ tag }}
            </button>
          </div>
        </div>
        <div class="track-list">
          <span>歌曲列表</span>
          <div v-for="track in playlistForm.tracks" :key="track.name" class="track-row">
            <strong>{{ track.name }}</strong>
            <em>{{ track.duration }}</em>
          </div>
        </div>
      </form>

      <form v-else class="dynamic-form">
        <label>
          根目录名称
          <input v-model="folderForm.rootName" type="text">
        </label>
        <label>
          默认展开层级
          <input v-model.number="folderForm.defaultExpandLevel" type="number" min="1" max="5">
        </label>
        <label class="checkbox-row">
          <input v-model="folderForm.selectable" type="checkbox">
          允许选择节点
        </label>
        <label class="checkbox-row">
          <input v-model="folderForm.showFileCount" type="checkbox">
          展示文件数量
        </label>
        <div class="tree-preview">
          <span>树形结构</span>
          <ul>
            <li>
              <strong>{{ folderForm.rootName }}</strong>
              <ul>
                <li v-for="node in folderForm.tree" :key="node.name">
                  <span>{{ node.name }}</span>
                  <ul v-if="node.children">
                    <li v-for="child in node.children" :key="child.name">
                      {{ child.name }}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </form>
    </section>

    <section class="preview-panel">
      <div class="preview-card">
        <p>实时预览</p>
        <h2>{{ previewTitle }}</h2>

        <template v-if="activeScene === 'musicPlayer'">
          <div class="cover-box">{{ musicForm.cover }}</div>
          <div class="player-meta">
            <span>{{ musicForm.artist }}</span>
            <span>{{ musicForm.mode }}</span>
          </div>
          <div class="progress-line">
            <i :style="{ width: musicForm.volume + '%' }" />
          </div>
          <small>{{ musicForm.showLyrics ? '歌词面板已开启' : '歌词面板已关闭' }}</small>
        </template>

        <template v-else-if="activeScene === 'playlist'">
          <div class="player-meta">
            <span>{{ playlistForm.owner }}</span>
            <span>{{ playlistForm.layout }}</span>
            <span>{{ playlistForm.sortBy }}</span>
          </div>
          <div class="preview-list">
            <div v-for="track in playlistForm.tracks" :key="track.name">
              <strong>{{ track.name }}</strong>
              <span>{{ track.duration }}</span>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="player-meta">
            <span>展开 {{ folderForm.defaultExpandLevel }} 层</span>
            <span>{{ folderForm.selectable ? '可选择' : '只读' }}</span>
          </div>
          <div class="preview-list">
            <div v-for="node in folderForm.tree" :key="node.name">
              <strong>{{ node.name }}</strong>
              <span v-if="folderForm.showFileCount">{{ node.children?.length ?? 0 }} 个文件</span>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<style scoped>
.example-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 320px;
  gap: 16px;
  margin: 24px 0;
}

.scene-list,
.form-panel,
.preview-panel {
  min-width: 0;
}

.scene-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scene-button {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  padding: 14px;
  text-align: left;
}

.scene-button span {
  display: block;
  font-size: 15px;
  font-weight: 700;
}

.scene-button small {
  display: block;
  margin-top: 6px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.scene-button.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.form-panel,
.preview-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  padding: 20px;
}

.panel-heading {
  margin-bottom: 18px;
}

.panel-heading p,
.preview-card p {
  margin: 0 0 4px;
  color: var(--vp-c-brand-1);
  font-size: 13px;
  font-weight: 700;
}

.panel-heading h2,
.preview-card h2 {
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 22px;
}

.panel-heading span {
  display: block;
  margin-top: 8px;
  color: var(--vp-c-text-2);
}

.dynamic-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.dynamic-form label,
.tag-editor,
.track-list,
.tree-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 700;
}

.dynamic-form input,
.dynamic-form select {
  width: 100%;
  min-height: 38px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 0 10px;
}

.dynamic-form input[type='range'] {
  padding: 0;
}

.checkbox-row {
  grid-column: span 2;
  flex-direction: row !important;
  align-items: center;
}

.checkbox-row input {
  width: 16px;
  min-height: 16px;
}

.tag-editor,
.track-list,
.tree-preview {
  grid-column: span 2;
}

.tag-list,
.player-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-pill,
.player-meta span {
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 5px 10px;
}

.track-row,
.preview-list div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 10px 12px;
}

.track-row em,
.preview-list span {
  color: var(--vp-c-text-2);
  font-style: normal;
}

.tree-preview ul {
  margin: 0;
  padding-left: 18px;
}

.tree-preview li {
  margin: 6px 0;
}

.preview-card {
  position: sticky;
  top: 88px;
}

.cover-box {
  display: grid;
  min-height: 160px;
  margin: 16px 0;
  border: 1px solid rgba(14, 165, 233, 0.32);
  border-radius: 8px;
  place-items: center;
  background:
    linear-gradient(135deg, rgba(14, 165, 233, 0.22), rgba(34, 197, 94, 0.18)),
    var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 800;
}

.progress-line {
  height: 8px;
  margin: 16px 0;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

.progress-line i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--vp-c-brand-1);
}

.preview-list {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

@media (max-width: 1100px) {
  .example-shell {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .preview-panel {
    grid-column: 1 / -1;
  }

  .preview-card {
    position: static;
  }
}

@media (max-width: 760px) {
  .example-shell,
  .dynamic-form {
    grid-template-columns: 1fr;
  }

  .checkbox-row,
  .tag-editor,
  .track-list,
  .tree-preview {
    grid-column: span 1;
  }
}
</style>
