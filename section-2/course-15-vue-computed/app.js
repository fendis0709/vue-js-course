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
    },
    showFullName() {
      console.log('This will be executed as long as counter changed...')
      if (!this.name) {
        return null
      }
      return `${this.name} Setiawan`
    }
  },
  computed: {
    fullName() {
      console.log('This will be executed only when name changes...')
      if (!this.name) {
        return null
      }
      return `${this.name} Setiawan`
    }
  }
});

app.mount('#events');
