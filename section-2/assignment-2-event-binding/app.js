const app = {
  data() {
    return {
      inputValue: null,
      inputValueTemp: null,
      inputValueConfirmed: null
    }
  },
  methods: {
    showAlert() {
      alert('Hello, world!')
    },
    showInput(event) {
      this.inputValue = event.target.value
    },
    setConfirmedInput(event) {
      this.inputValueTemp = event.target.value
    },
    showConfirmedInput() {
      this.inputValueConfirmed = this.inputValueTemp
    }
  }
}

Vue.createApp(app).mount('#assignment')