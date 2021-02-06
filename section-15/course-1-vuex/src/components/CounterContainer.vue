<template>
  <h2>{{ counterNumber }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // Using tradition method
    // counter() {
    //   return this.$store.getters.counter;
    // },
    // Using modern method
    // ...mapGetters(['counter']),
    // Using modern method #2
    ...mapGetters({
      counterNumber: 'counter'
    })
  },
};
</script>

<style scoped>
h2 {
  color: blue;
}
</style>