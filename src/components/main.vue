<template>
  <div class="main-wrapper">
    <div class="title">
      <h1>Space-X launch schedule based on Space-X Open Source REST API</h1>
    </div>
    <div class="mt-3">
      <b-button-group size="lg">
        <router-link to="/upcoming"><b-button>Up coming</b-button></router-link>
        <router-link to="/latest"><b-button>Latest</b-button></router-link>
      </b-button-group>
    </div>
  </div>
</template>

<script>

export default {
  name: "Main"
};
</script>

<style scoped>
.main-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
}
.title {
  color: #ffffff;
}

a {
  padding: 0 10px;
}
</style>
