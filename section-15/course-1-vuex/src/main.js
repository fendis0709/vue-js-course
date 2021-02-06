import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const appStore = createStore({
  state() {
    return {
      counterGlobal: 0
    }
  },
  mutations: {
    increment(state, numberOfIncrease = 1) {
      state.counterGlobal = state.counterGlobal + numberOfIncrease;
    }
  }
})

createApp(App).use(appStore).mount('#app');
