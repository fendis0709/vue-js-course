const app = {
  data() {
    return {
      goal: null,
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goal)
    }
  }
};

Vue.createApp(app).mount('#user-goals')
