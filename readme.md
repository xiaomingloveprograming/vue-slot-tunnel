# Vue Slot Tunnel

[![English](https://img.shields.io/badge/language-English-blue.svg)](./README.md)
[![中文](https://img.shields.io/badge/language-中文-red.svg)](./README.zh-CN.md)

A Vue3 plugin for tunneling slots through multiple component layers.

## Installation

```bash
npm install vue-slot-tunnel
```

## Usage

1. Register the plugin in your Vue app:

```js
import { createApp } from 'vue'
import { SlotTunnel } from 'vue-slot-tunnel'
import App from './App.vue'

const app = createApp(App)
app.use(SlotTunnel)
app.mount('#app')
```

2. Use the tunnel system:

In your parent component, define slots with a `tunnel-` prefix:

```vue
<!-- ParentComponent.vue -->
<template>
  <div>
    <h2>Parent Component</h2>
    <child-component></child-component>
  </div>
</template>
```

In your app component:

```vue
<!-- App.vue -->
<template>
  <parent-component>
    <!-- This content will be tunneled to the deep component -->
    <template #tunnel-footer>
      <p>This is tunneled content</p>
    </template>
  </parent-component>
</template>
```

In your deep child component, use the SlotTunnel component to receive the content:

```vue
<!-- DeepChildComponent.vue -->
<template>
  <div>
    <h4>Deep Child Component</h4>
    <!-- Renders content from slot with tunnel-footer name -->
    <slot-tunnel name="footer" />
  </div>
</template>
```

## Configuration

You can customize the tunnel prefix when registering the plugin:

```js
app.use(SlotTunnel, { prefix: 'custom-tunnel-' })
```

## License

MIT
