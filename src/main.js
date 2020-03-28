import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store';
import moment from 'moment';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import Main from './components/main.vue';
import Modal from './components/modal.vue';
import upComing from './components/upComing.vue';
import latestFlights from './components/latestFlights.vue';

Vue.use(VueRouter);
Vue.prototype.moment = moment;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuex);

const createRoute = url => {
  return process.env.NODE_ENV === 'production' ? `/space-x-launch-schedule/${url}` : `/${url}`;
};

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: createRoute(''),
      name: 'home',
      component: Main,
    },
    {
      path: createRoute('upcoming'),
      name: 'upComing',
      component: upComing,
    },
    {
      path: createRoute('latest'),
      name: 'latestFlights',
      component: latestFlights,
    },
    {
      path: createRoute('flight/:id'),
      name: 'flight',
      component: Modal,
      props: true,
    },
  ],
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
