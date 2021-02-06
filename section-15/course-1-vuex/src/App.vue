<template>
  <div>
    <base-container title="Vuex">
      <counter-container></counter-container>
      <button @click="addCounterVuex()">Add counter</button>
    </base-container>
    <base-container title="Without Vuex">
      <h2>{{ counterLocal }}</h2>
      <button @click="addCounterLocal()">Add counter</button>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import CounterContainer from './components/CounterContainer.vue';

export default {
  components: {
    BaseContainer,
    CounterContainer,
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
      this.$store.state.counterGlobal =
        this.$store.state.counterGlobal + increment;
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