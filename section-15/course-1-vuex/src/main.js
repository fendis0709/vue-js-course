import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const appStore = createStore({
  state() {
    return {
      counterGlobal: 0,
      isLoggedIn: false,
    }
  },
  mutations: {
    increment(state, numberOfIncrease = 1) {
      state.counterGlobal = state.counterGlobal + numberOfIncrease;
    },
    reset(state) {
      state.counterGlobal = 0;
    },
    setAuth(state, isLoginAttempt = true) {
      state.isLoggedIn = isLoginAttempt
    }
  },
  actions: {
    asyncIncrement(context, numberOfIncrease = 1) {
      setTimeout(function () {
        context.commit('increment', numberOfIncrease)
      }, 1500)
    },
    login(context) {
      context.commit('setAuth', true)
    },
    logout(context) {
      context.commit('setAuth', false)
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
    },
    isUserAuthenticated(state) {
      return state.isLoggedIn
    }
  }
})

createApp(App).use(appStore).mount('#app');
