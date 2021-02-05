import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

createApp(App)
  .component('base-badge', BaseBadge)
  .component('base-card', BaseCard)
  .mount('#app');
