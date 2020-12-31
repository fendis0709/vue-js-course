const app = {
  data: () => {
    return {
      courseGoal: 'Finish the course and build an amazing app!',
      vueLink: 'https://vuejs.org'
    }
  },
  methods: {
    welcomeMessage: () => {
      const random = Math.random()
      if(random > 0.5){
        return 'Good Morning World!'
      } else {
        return 'おはよう世界！'
      }
    }
  }
}

Vue.createApp(app).mount('#user-goal')