<template>
  <b-modal
    size="xl"
    ref="modalWindow"
    hide-footer
    scrollable
    v-model="showModal"
    @close="closeModal()"
    :title="currentFlight.mission_name"
  >
    <Flight :flightItem="currentFlight" />
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Flight from './flight.vue';

export default {
  name: 'Modal',
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Flight,
  },
  computed: mapGetters(['latestFlights', 'currentFlight']),
  methods: {
    ...mapActions(['fetchLatestFlights', 'fetchCurrentFlight']),
    closeModal() {
      this.$router.go(-1);
    },
  },
  created() {
    !this.currentFlight && this.fetchCurrentFlight(this.$route.params.id);
  },
  mounted() {
    this.showModal = true;
  },
  beforeDestroyed() {
    this.showModal = false;
  },
};
</script>
