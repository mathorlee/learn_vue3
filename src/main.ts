import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons'

import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})

app.use(ElementPlus)
app.mount('#app')
