import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Teams from './components/teams/TeamsList.vue';
import Users from './components/users/UsersList.vue';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: Teams
    },
    {
      path: '/users',
      component: Users
    },
  ],
  linkActiveClass: 'active'
})

app
  .use(router)
  .mount('#app');
