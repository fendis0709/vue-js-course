const app = {
  data: () => {
    return {
      person: {
        name: 'Fendi',
        age: 26,
      },
      imageUrl: 'https://docs.vuejs.id/images/logo.png'
    }
  },
  methods: {
    addAge() {
      return this.person.age + 5
    },
    getRandomNumber() {
      return Math.random()
    }
  }
}

Vue.createApp(app).mount('#assignment')