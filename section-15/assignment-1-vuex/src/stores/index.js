import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    setAuth(state, isAuth = true) {
      state.isLoggedIn = isAuth
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

export default store