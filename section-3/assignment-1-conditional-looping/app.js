const app = {
  data() {
    return {
      task: null,
      tasks: [],
      taskToggleShow: true,
      taskToggleText: 'Hide'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
      this.task = null
    },
    toggleTask() {
      this.taskToggleShow = !this.taskToggleShow
      this.taskToggleText = this.taskToggleShow ? 'Hide' : 'Show'
    }
  }
}

Vue.createApp(app).mount('#assignment')