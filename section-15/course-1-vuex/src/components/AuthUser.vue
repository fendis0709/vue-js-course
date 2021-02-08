<template>
  <div>
    <button @click="doLogin" v-if="!isAuth">Login</button>
    <button @click="doLogout" v-if="isAuth">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    doLogin() {
      this.$store.dispatch('login');
    },
    doLogout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.isUserAuthenticated;
    },
  },
};
</script>