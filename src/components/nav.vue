<template>
  <div class="mt-3">
    <b-button-group size="lg">
      <router-link :to="createLinks('upcoming')"><b-button>Up coming</b-button></router-link>
      <router-link :to="createLinks('latest')"><b-button>Latest</b-button></router-link>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  methods: {
    createLinks(url) {
      return process.env.NODE_ENV === 'production' ? `/space-x-launch-schedule/${url}` : `/${url}`;
    },
  },
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
