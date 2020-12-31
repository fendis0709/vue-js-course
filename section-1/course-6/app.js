Vue.createApp({
  data() {
    return {
      goals: [],
      inputValue: null
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputValue)
    }
  }
}).mount('div#app')