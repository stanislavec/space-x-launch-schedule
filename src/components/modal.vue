<template>
  <b-modal
    :id="flight.mission_name"
    size="xl"
    ref="modalWindow"
    hide-footer
    @close="closeModal()"
    :title="flight.mission_name"
  >
    <Flight :flightItem="flight" />
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Flight from "./flight.vue";

export default {
  name: "Modal",
  props: ["flight"],
  components: {
    Flight
  },
  computed: mapGetters(["latestFlights", "preloader"]),
  methods: {
    ...mapActions(["fetchLatestFlights"]),
    showModal() {
      this.$refs["modalWindow"].show();
    },

    closeModal() {
      this.$router.go(-1);
    }
  },

  created() {
    !this.latestFlights ? this.fetchLatestFlights() : "";
  },
  beforeMount() {
    if (!this.flight) {
      this.flight = this.latestFlights.filter(
        item => item.launch_date_unix === Number(this.$route.params.id)
      )[0];
    }
  },
  mounted() {
    this.showModal();
  }
};
</script>
