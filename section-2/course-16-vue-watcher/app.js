const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: null
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = null
    }
  },
  // Very helpful to format data
  computed: {
    fullName() {
      if (!this.name) {
        return null
      }
      return `${this.name} Setiawan`
    }
  },
  // Very helpful to process data
  watch: {
    counter(newValue) {
      if (newValue > 50) {
        this.counter = 0
      }
    }
  }
});

app.mount('#events');
