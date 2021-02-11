export default {
  setUser(state, data) {
    state.userId = data.userId;
    state.token = data.token;
  },
  storeUser(_, data) {
    localStorage.setItem('vue__token', data.token)
    localStorage.setItem('vue__user_id', data.userId)
    localStorage.setItem('vue__token_expires_at', data.tokenExpiresAt)
  },
  removeUser(state) {
    localStorage.removeItem('vue__token')
    localStorage.removeItem('vue__user_id')
    localStorage.removeItem('vue__token_expires_at')
  }
}