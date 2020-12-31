const app = {
  data: () => {
    return {
      courseGoal: 'Finish the course and build an amazing app!',
      vueLink: 'https://vuejs.org'
    }
  }
}

Vue.createApp(app).mount('#user-goal')