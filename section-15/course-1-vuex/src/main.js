import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterStore = {
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
        context.commit('increment', numberOfIncrease)
      }, 1500)
    }
  },
  getters: {
    counter(state) {
      return state.counterGlobal
    },
    factorialCounter(_, getters) {
      let counter = getters.counter

      let result = 1;
      while (counter > 0) {
        result = result * counter
        counter--
      }

      return result;
    }
  }
}

const appStore = createStore({
  modules: {
    counterModule: counterStore
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    setAuth(state, isLoginAttempt = true) {
      state.isLoggedIn = isLoginAttempt
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', true)
    },
    logout(context) {
      context.commit('setAuth', false)
    }
  },
  getters: {
    isUserAuthenticated(state) {
      return state.isLoggedIn
    }
  }
})

createApp(App).use(appStore).mount('#app');
