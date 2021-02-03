const app = {
  // This will do nothing
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
          showDetail: true
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
          showDetail: false
        }
      ]
    }
  }
}

const friendApp = {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetail()">{{ !showDetail ? 'Show Details' : 'Hide Details' }}</button>
      <ul v-show="showDetail">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      showDetail: false,
      friend: {
        id: 1,
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com'
      }
    }
  },
  methods: {
    toggleDetail() {
      this.showDetail = !this.showDetail
    }
  }
}

Vue.createApp(app).component('friend-list', friendApp).mount('#app')