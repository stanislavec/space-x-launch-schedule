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

const router = new VueRouter({
	mode: 'history',
	hash: false,
	routes: [
		{
			path:
				process.env.NODE_ENV === 'production'
					? '/space-x-launch-schedule/'
					: '/',
			name: 'home',
			component: Main
		},
		{
			path:
				process.env.NODE_ENV === 'production'
					? '/space-x-launch-schedule/upcoming'
					: '/upcoming',
			name: 'upComing',
			component: upComing
		},
		{
			path:
				process.env.NODE_ENV === 'production'
					? '/space-x-launch-schedule/latest'
					: '/latest',
			name: 'latestFlights',
			component: latestFlights
		},
		{
			path:
				process.env.NODE_ENV === 'production'
					? '/space-x-launch-schedule/flight/:id'
					: '/flight/:id',
			name: 'flight',
			component: Modal,
			props: true
		}
	]
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
