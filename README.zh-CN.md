# Vue Slot Tunnel

[![English](https://img.shields.io/badge/language-English-blue.svg)](./README.md)
[![中文](https://img.shields.io/badge/language-中文-red.svg)](./README.zh-CN.md)

Vue3 插件，用于在多层组件之间传递插槽内容。

## 安装

```bash
npm install vue-slot-tunnel
```

## 使用方法

1. 在 Vue 应用中注册插件：

```js
import { createApp } from 'vue'
import { SlotTunnel } from 'vue-slot-tunnel'
import App from './App.vue'

const app = createApp(App)
app.use(SlotTunnel)
app.mount('#app')
```

2. 使用插槽隧道系统：

在父组件中，定义带有 `tunnel-` 前缀的插槽：

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <h2>父组件</h2>
    <child-component></child-component>
  </div>
</template>
```

在应用组件中：

```vue
<!-- App.vue -->
<template>
  <parent-component>
    <!-- 这个内容将被传送到深层子组件 -->
    <template #tunnel-footer>
      <p>这是被传送的内容</p>
    </template>
  </parent-component>
</template>
```

在深层子组件中，使用 SlotTunnel 组件接收内容：

```vue
<!-- DeepChildComponent.vue -->
<template>
  <div>
    <h4>深层子组件</h4>
    <!-- 渲染来自 tunnel-footer 插槽的内容 -->
    <slot-tunnel name="footer" />
  </div>
</template>
```

## 配置

您可以在注册插件时自定义隧道前缀：

```js
app.use(SlotTunnel, { prefix: 'custom-tunnel-' })
```

## 许可证

MIT
