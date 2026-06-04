import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// Global styles with modern fonts
import './styles/global.css'

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
