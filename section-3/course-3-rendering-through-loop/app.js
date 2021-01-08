const app = {
  data() {
    return {
      goal: null,
      goals: [],
      student: {
        name: 'Joko',
        gender: 'Male'
      }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
      this.goal = null
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
};

Vue.createApp(app).mount('#user-goals')
