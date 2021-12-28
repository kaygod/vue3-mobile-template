import { createApp } from 'vue';
import 'default-passive-events';
import App from './App.vue';
import router from './router';
import store from './store';
import { importVant } from './config/vant';
// 引入全部组件库样式
import 'vant/lib/index.less';

import 'amfe-flexible';

const app = createApp(App);

importVant(app);

app
  .use(store)
  .use(router)
  .mount('#app');
