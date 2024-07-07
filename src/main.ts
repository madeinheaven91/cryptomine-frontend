import './assets/main.css'

import config from './config' 
import currentUser from './api/fetchUser'
import syncUser from './api/syncUser'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
app.config.errorHandler = (err, instance, info) => {
  console.log("Error ${err} occured in ${instance} with ${info}")
}

// console.log(currentUser.userid)
setInterval(() => syncUser(currentUser), config.syncInterval * 1000)
