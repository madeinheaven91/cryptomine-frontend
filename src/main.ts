import './assets/main.css'

import currentUser from './api/fetchUser'
import syncUser from './api/syncUser'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


currentUser.username = "bebra"
console.log(currentUser)

setInterval(() => syncUser(currentUser), 300000)
