<template>
  <div id="app">
    <router-view name="home"/>
    <b-tabs content-class="mt-3">
      <b-tab title="Up Coming" active><upComing /></b-tab>
      <b-tab title="Latest"><latestFlights /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import upComing from './upComing.vue'
import latestFlights from './latestFlights.vue'

export default {
  name: 'Main',
  components: {
    upComing,
    latestFlights
  }
}
</script>
