const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      nameUsingBind: null,
      nameUsingModel: null
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // Using V-On & V-Bind
    setNameBind(event) {
      this.nameUsingBind = event.target.value;
    },
    resetInputBind() {
      this.nameUsingBind = null
    },
    // Using V-Model
    resetInputModel() {
      this.nameUsingModel = null
    }
  }
});

app.mount('#events');
