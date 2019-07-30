<template>
  <div class="mt-3">
    <b-button-group size="lg">
      <router-link to="/upcoming"><b-button>Up coming</b-button></router-link>
      <router-link to="/latest"><b-button>Latest</b-button></router-link>
    </b-button-group>
  </div>
</template>

<script>

export default {
  name: "Nav"
};
</script>

<style scoped>
.mt-3 {
  margin-bottom: 30px;
}
a {
  padding: 0 10px;
}
</style>
