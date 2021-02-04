import { createApp } from 'vue'
import App from './App.vue'
import './styles/tailwind.css'
import './styles/style.css'
import router from './router/routes'

createApp(App)
  .use(router)
  .mount('#app')
