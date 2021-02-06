import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const appStore = createStore({
  state() {
    return {
      counterGlobal: 0
    }
  }
})

createApp(App).use(appStore).mount('#app');
