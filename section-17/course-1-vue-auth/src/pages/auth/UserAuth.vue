<template>
  <div>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="doSignIn">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'fendi@dokternet.com',
      password: 'pasien123',
      formIsValid: true,
      errorMessage: null,
      isLoading: false,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      this.errorMessage = null;
      if (this.email == '' || this.password == '' || this.password.length < 6) {
        this.formIsValid = false;
      }
    },
    async doSignIn() {
      this.isLoading = true;

      this.validateForm();

      if (this.formIsValid) {
        try {
          await this.$store.dispatch('signin', {
            email: this.email,
            password: this.password,
          });
          this.isLoading = false;
          this.$router.replace('/coaches');
        } catch (error) {
          this.errorMessage = error.message;
          this.isLoading = false;
        }
      }
    },
    async doSignUp() {
      this.isLoading = true;

      this.validateForm();

      if (this.formIsValid) {
        try {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        } catch (error) {
          this.errorMessage = error.message;
          this.isLoading = false;
          return;
        }
      }

      this.isLoading = false;

      alert('Register success!');
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