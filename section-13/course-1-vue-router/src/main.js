import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Teams from './components/teams/TeamsList.vue';
import Users from './components/users/UsersList.vue';
import UserFooter from './components/users/UserFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
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
      components: {
        default: Teams,
        footer: TeamFooter
      },
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
      components: {
        default: Users,
        footer: UserFooter
      }
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
