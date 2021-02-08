import { createApp } from 'vue';
import router from './router.js';
import store from './stores/index.js';

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

createApp(App)
  .use(store)
  .use(router)
  .component('base-badge', BaseBadge)
  .mount('#app');
