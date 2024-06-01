import { createApp } from 'vue'
import App from './App.vue'
import QrReader from 'vue3-qr-reader';
import router from './router'

createApp(App).use(router).use(QrReader).mount('#app')
