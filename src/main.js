import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";

import Flight from "./components/flight.vue";
import Main from "./components/main.vue";
import upComing from "./components/upComing.vue";
import latestFlights from "./components/latestFlights.vue";

Vue.use(VueRouter);
Vue.prototype.moment = moment;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: "history",
  hash: false,
  routes: [
    {
      path: "/",
      name: "home",
      component: Main
    },
    {
      path: "/upcoming",
      name: "upComing",
      component: upComing
    },
    {
      path: "/latest",
      name: "latestFlights",
      component: latestFlights
    },
    {
      path: "/flight/:id",
      name: "flight",
      component: Flight,
      props: true
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
