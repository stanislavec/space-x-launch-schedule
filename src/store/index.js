import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { requestApi } from '../api';

export default new Vuex.Store({
	state: {
		upComingFlights: null,
		latestFlights: null,
		preloader: false
	},
	mutations: {
		SET_LATEST_FLIGHTS(state, value) {
			state.latestFlights = value;
		},
		SET_UP_COMING_FLIGHTS(state, value) {
			state.upComingFlights = value;
		},
		SET_PRELOADER(state, value) {
			state.preloader = value;
		}
	},
	actions: {
		async fetchLatestFlights({ commit }) {
			commit('SET_PRELOADER', true);
			let response;
			try {
				response = await requestApi('past');
			} catch (e) {
				console.log('Request Error', e);
			}
			if (response) {
				commit('SET_LATEST_FLIGHTS', response.data.reverse());
			}
			commit('SET_PRELOADER', false);
		},
		async fetchUpCominglights({ commit }) {
			commit('SET_PRELOADER', true);
			let response;
			try {
				response = await requestApi('upcoming');
			} catch (e) {
				console.log('Request Error', e);
			}
			if (response) {
				commit('SET_UP_COMING_FLIGHTS', response.data);
			}
			commit('SET_PRELOADER', false);
		}
	},
	getters: {
		latestFlights: state => state.latestFlights,
		upComingFlights: state => state.upComingFlights,
		preloader: state => state.preloader
	}
});
