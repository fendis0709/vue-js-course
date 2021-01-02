const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: null
    };
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    setName(event) {
      this.name = event.target.value
    }
  }
});

app.mount('#events');
