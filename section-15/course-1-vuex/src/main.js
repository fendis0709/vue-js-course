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
    },
    reset(state) {
      state.counterGlobal = 0;
    }
  },
  actions: {
    asyncIncrement(context, numberOfIncrease = 1) {
      setTimeout(function () {
        context.commit('increment', numberOfIncrease);
      }, 1500);
    }
  },
  getters: {
    counter(state) {
      return state.counterGlobal;
    },
    factorialCounter(_, getters) {
      let counter = getters.counter;

      let result = 1;
      while (counter > 0) {
        result = result * counter;
        counter--;
      }

      return result;
    }
  }
})

createApp(App).use(appStore).mount('#app');
