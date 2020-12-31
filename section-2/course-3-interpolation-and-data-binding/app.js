const app = {
  data: () => {
    return {
      courseGoal: 'Finish the course and build an amazing app!'
    }
  }
}

Vue.createApp(app).mount('#user-goal')