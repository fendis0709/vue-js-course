const app = {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add(factor = 1) {
      this.counter = this.counter + factor
    },
  },
  computed: {
    message() {
      if (this.counter > 0) {
        if (this.counter <= 37) {
          return 'Not there yet'
        }
        if (this.counter > 37) {
          return 'Too much!'
        }
      }
      return this.counter
    }
  },
  watch: {
    counter() {
      const _this = this
      setTimeout(function () {
        _this.counter = 0
      }, 5000)
    }
  }
}

Vue.createApp(app).mount('#assignment')