const apiKey = 'AIzaSyChJHRw8HNpOrHK3ahvOH6DQhaoNgC-48M';

export default {
  async signin(context, payload) {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseJson = await response.json()

    if (!response.ok) {
      let errorMessage = 'Failed to login user.';
      switch (responseJson.error.message) {
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email not registered.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid password.';
          break;
        case 'USER_DISABLED':
          errorMessage = 'User disabled.';
          break;
      }

      throw new Error(errorMessage);
    }

    context.commit('setUser', {
      userId: responseJson.localId,
      token: responseJson.idToken,
      tokenLifetime: responseJson.expiresIn
    })
  },
  async signup(context, payload) {
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
  },
  signout(context) {
    context.commit('setUser', {
      userId: null,
      token: null,
      tokenLifetime: null
    })
  }
}