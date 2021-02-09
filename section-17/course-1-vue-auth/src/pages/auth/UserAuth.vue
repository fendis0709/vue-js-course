<template>
  <base-card>
    <form @submit.prevent="doLogin">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model.trim="email" autofocus/>
      </div>
      <div class="form-control">
        <label for="email">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model.trim="password"
        />
      </div>
      <p v-if="!formIsValid">
        <ul>
          <li>Email and Password are required</li>
          <li>Password minimum has 6 chars long</li>
        </ul>
      </p>
      <p v-if="errorMessage" style="color: red;">
        {{ errorMessage }}
      </p>
      <base-button type="submit"> Login </base-button>
      <base-button type="button" mode="flat" @click="doSignUp">
        Signup
      </base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      errorMessage: null,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.email == '' || this.password == '' || this.password.length < 6) {
        console.log('INVALID');
        this.formIsValid = false;
      }
    },
    doLogin() {
      console.log('AUTH');

      this.validateForm();

      if (this.formIsValid) {
        console.log('VALID');
        // Send http request
      }
    },
    doSignUp() {
      this.validateForm();
      if (this.formIsValid) {
        this.$store
          .dispatch('signup', {
            email: this.email,
            password: this.password,
          })
          .catch((error) => {
            this.errorMessage = error.message;
          });
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>