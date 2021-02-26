import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Teams from './components/teams/TeamsList.vue';
import Users from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      name: 'team',
      path: '/teams',
      component: Teams,
      children: [
        {
          name: 'team-detail',
          path: ':teamId',
          component: TeamMembers
        }
      ]
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active'
})

app
  .use(router)
  .mount('#app');
