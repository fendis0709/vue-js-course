import { createApp } from 'vue'
import App from './App.vue'
import WatchList from './components/WatchList.vue'

createApp(App)
  .component('watch-list', WatchList)
  .mount('#app')
