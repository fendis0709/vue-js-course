const app = {
  data: () => {
    return {
      courseGoal: 'Finish the course and build an amazing app!',
      vueLink: 'https://vuejs.org',
      htmlMessage: '<h3>This is heading 3</h3>'
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