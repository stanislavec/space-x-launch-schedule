<template>
  <div id="app">
    <div class="mask">
      <Preloader v-if="preloader" />
      <Nav v-if="checkRoute()" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Nav from './components/nav';
import Preloader from './components/preloader';
export default {
  name: 'App',
  components: {
    Nav,
    Preloader,
  },
  computed: mapGetters(['preloader']),

  methods: {
    checkRoute() {
      if (process.env.NODE_ENV === 'production') {
        return this.$route.path !== '/space-x-launch-schedule/';
      } else {
        return this.$route.path !== '/';
      }
    },
  },
};
</script>

<style>
@import './styles/styles.css';

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: url('https://live.staticflickr.com/65535/48052269657_54c9f02122_h.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}

.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  flex: 1 1 auto;
}
</style>
