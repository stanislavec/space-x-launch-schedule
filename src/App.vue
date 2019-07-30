<template>
  <div id="app">
    <div class="mask">
      <Nav v-if="this.$route.path !== '/'"/>
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/nav'
export default {
  name: "App",
  components: {
    Nav
  },
};
</script>

<style>
@import "./styles/styles.css";

* {
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: url(/img/background.ee42e372.jpg);
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
