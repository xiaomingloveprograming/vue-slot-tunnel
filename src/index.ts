import { App, Component, defineComponent, h, PropType, VNode } from 'vue'

interface SlotTunnelOptions {
  // 插槽穿透的配置选项
  prefix: string // 插槽名称前缀，用于区分普通插槽和穿透插槽
}

const defaultOptions: SlotTunnelOptions = {
  prefix: 'tunnel-'
}

// 创建一个全局的插槽映射表
const slotMap = new Map<string, VNode[]>()

export const SlotTunnel = {
  install(app: App, options: Partial<SlotTunnelOptions> = {}) {
    const mergedOptions: SlotTunnelOptions = { ...defaultOptions, ...options }

    // 注册全局组件
    app.component(
      'SlotTunnel',
      defineComponent({
        props: {
          name: {
            type: String as PropType<string>,
            required: true
          }
        },
        setup(props) {
          return () => {
            const slots = slotMap.get(props.name) || []
            return h('div', { class: 'slot-tunnel' }, slots)
          }
        }
      })
    )

    // 添加全局混入
    app.mixin({
      created() {
        const slots = this.$slots
        if (slots) {
          Object.entries(slots).forEach(([name, slot]) => {
            if (name.startsWith(mergedOptions.prefix)) {
              const tunnelName = name.slice(mergedOptions.prefix.length)
              slotMap.set(tunnelName, slot as VNode[])
            }
          })
        }
      }
    })
  }
}

// 类型声明
declare module 'vue' {
  export interface GlobalComponents {
    SlotTunnel: Component
  }
}
