import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 图标集合: https://element-plus.org/zh-CN/component/icon.html#icon-collection
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')
