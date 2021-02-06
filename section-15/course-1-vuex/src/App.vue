<template>
  <div>
    <base-container title="Vuex">
      <counter-container></counter-container>
      <counter-factorial></counter-factorial>
      <button @click="addCounterVuex()">Add counter (1)</button>
      &nbsp;
      <button @click="addCounterVuex(5)">Add counter (5)</button>
      &nbsp;
      <button @click="asyncAddCounterVuex(10)">Add counter (10)</button>
      &nbsp;
      <button @click="resetCounterVuex()">Reset counter</button>
    </base-container>
    <base-container title="Without Vuex">
      <h2>{{ counterLocal }}</h2>
      <button @click="addCounterLocal(1)">Add counter (1)</button>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterContainer from './components/CounterContainer.vue';
import CounterFactorial from './components/CounterFactorialContainer.vue';

export default {
  components: {
    BaseContainer,
    CounterContainer,
    CounterFactorial,
  },
  data() {
    return {
      counterLocal: 0,
    };
  },
  methods: {
    addCounterLocal(increment = 1) {
      this.counterLocal = this.counterLocal + increment;
    },
    addCounterVuex(increment = 1) {
      this.$store.commit('increment', increment);
    },
    asyncAddCounterVuex(increment = 1) {
      this.$store.dispatch('asyncIncrement', increment);
    },
    resetCounterVuex() {
      this.$store.commit('reset');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>