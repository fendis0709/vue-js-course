const apiKey = 'AIzaSyChJHRw8HNpOrHK3ahvOH6DQhaoNgC-48M';

export default {
  async signin(context, payload) {
    await context.dispatch('auth', {
      ...payload,
      mode: 'signin'
    })
  },
  async signup(context, payload) {
    await context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    })
  },
  async auth(context, payload) {
    const mode = payload.mode;

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    if (mode === 'signin') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseJson = await response.json()

    if (!response.ok) {
      let errorMessage = 'Something went wrong, please try again later.';

      if (mode === 'signin') {
        errorMessage = 'Failed to login user.';
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
      }

      if (mode === 'signup') {
        errorMessage = 'Failed to register user.';
        if (responseJson.error.message == 'EMAIL_EXISTS') {
          errorMessage = 'Email already registered.';
        }
      }

      throw new Error(errorMessage);
    }

    context.commit('setUser', {
      userId: responseJson.localId,
      token: responseJson.idToken,
      tokenLifetime: responseJson.expiresIn
    })

    context.commit('storeUser', {
      userId: responseJson.localId,
      token: responseJson.idToken
    })
  },
  autoSignin(context) {
    const vueToken = localStorage.getItem('vue__token');
    const vueUserId = localStorage.getItem('vue__user_id');

    if (vueToken && vueUserId) {
      context.commit('setUser', {
        userId: vueUserId,
        token: vueToken,
        tokenLifetime: null
      })
    }
  },
  signout(context) {
    context.commit('setUser', {
      userId: null,
      token: null,
      tokenLifetime: null
    })

    context.commit('removeUser')
  }
}