import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { SpeedInsights } from "@vercel/speed-insights/next"
createApp(App).use(router).mount('#app')
