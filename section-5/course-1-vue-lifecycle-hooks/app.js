const app = {
  data() {
    return {
      message: 'Vue is great!',
      currentUserInput: null,
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
      this.currentUserInput = null;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    // This method will be fired after you make some changes
    console.log('beforeUpdate()');
  },
  updated() {
    // This method will be fired after you make some changes
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
};

const vueApp = Vue.createApp(app);

vueApp.mount('#app');

// Auto-destroy in 3 seconds
setTimeout(function () {
  vueApp.unmount();
}, 3000);