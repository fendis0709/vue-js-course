const app = {
  data() {
    return {
      userClass: null,
      userToggleParagraph: true,
      bgColor: null
    }
  },
  methods: {
    toggleParagraph() {
      this.userToggleParagraph = !this.userToggleParagraph
    }
  },
  computed: {
    userToggleClass() {
      return this.userToggleParagraph ? 'visible' : 'hidden'
    }
  }
}

Vue.createApp(app).mount('#assignment')