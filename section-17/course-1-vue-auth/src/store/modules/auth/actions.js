export default {
  login() { },
  async signup(context, payload) {
    const apiKey = 'AIzaSyChJHRw8HNpOrHK3ahvOH6DQhaoNgC-48M';
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseJson = await response.json()

    if (!response.ok) {
      let errorMessage = 'Failed to register user.';
      if (responseJson.error.message == 'EMAIL_EXISTS') {
        errorMessage = 'Email already registered.';
      }

      throw new Error(errorMessage);
    }

    context.commit('setUser', {
      userId: responseJson.localId,
      token: responseJson.idToken,
      tokenLifetime: responseJson.expiresIn
    })
  }
}