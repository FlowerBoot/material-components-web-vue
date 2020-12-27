import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './../packages/index'
import Button from './../packages/index'
const app = createApp(App)
app.use(Button)
app.use(HelloWorld)
app.mount('#app')
