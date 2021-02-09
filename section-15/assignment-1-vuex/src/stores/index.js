import { createStore } from 'vuex'

import cart from './modules/cart.js'
import product from './modules/product.js'

const store = createStore({
  modules: {
    cart: cart,
    product: product,
  },
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