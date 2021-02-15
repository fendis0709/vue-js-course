import { createApp } from 'vue';

import App from './App.vue';
import LoggerMixin from './mixins/logger.js';

createApp(App)
  .mixin(LoggerMixin)
  .mount('#app');
