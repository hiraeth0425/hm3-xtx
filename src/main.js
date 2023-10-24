import { createApp } from 'vue'
import pinia from '@/stores'
import App from './App.vue'
import router from './router'
// 引入初始化樣式文件
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
