export default {
  setUser(state, data) {
    state.userId = data.userId;
    state.token = data.token;
    state.tokenLifetime = data.tokenLifetime;
  },
  storeUser(_, data) {
    localStorage.setItem('vue__token', data.token)
    localStorage.setItem('vue__user_id', data.userId)
  },
  removeUser(state) {
    localStorage.removeItem('vue__token')
    localStorage.removeItem('vue__user_id')
  }
}