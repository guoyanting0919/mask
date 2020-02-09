import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import utils from './utils';

Vue.prototype.$utils = utils;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  render: h => h(App)
}).$mount('#app');
