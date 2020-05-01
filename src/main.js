import Vue from 'vue';
import VueAxios from 'vue-axios';
import Toast from 'vue-toastification';
import axios from './plugins/axios';
import App from './App.vue';

import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Toast);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
