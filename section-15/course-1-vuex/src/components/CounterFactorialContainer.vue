<template>
  <h2>{{ counter }} <span>(Factorial)</span></h2>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.factorialCounter;
    },
  },
};
</script>

<style scoped>
h2 {
  color: brown;
}
h2 span {
  color: gray;
}
</style>