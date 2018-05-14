import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import { store } from './store';
import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './assets/styles.scss';

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App ref="mainComponent"/>'
});

export const EventBus = new Vue();

