import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

createApp(App)
  .component('base-badge', BaseBadge)
  .mount('#app');
