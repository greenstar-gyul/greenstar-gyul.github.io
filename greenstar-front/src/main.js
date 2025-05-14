// import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'highlight.js/styles/github.css'; // 원하는 테마로 변경 가능

import 'github-markdown-css/github-markdown-light.css'; // or github-markdown-light.css

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
