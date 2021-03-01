import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.css'
import router from './router/routes'
import 'windi.css'
import { init } from '@/init'

(async () => {
  await init()

  createApp(App)
    .use(router)
    .mount('#app')
})()