export default {
  setUser(state, data) {
    state.userId = data.userId;
    state.token = data.token;
    state.tokenLifetime = data.tokenLifetime;
  }
}