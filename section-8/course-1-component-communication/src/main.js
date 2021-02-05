import { createApp } from 'vue'
import App from './App.vue'
import WatchList from './components/WatchList.vue'
import AddWatchList from './components/AddWatchList.vue'

createApp(App)
  .component('watch-list', WatchList)
  .component('add-watch-list', AddWatchList)
  .mount('#app')
