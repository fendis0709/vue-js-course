const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: null,
      confirmName: null
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
    },
    confirmValue() {
      this.confirmName = this.name
    }
  }
});

app.mount('#events');
