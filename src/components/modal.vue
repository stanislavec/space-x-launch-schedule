<template>
  <b-modal
    :id="this.flightItem.mission_name"
    size="xl"
    ref="modalWindow"
    hide-footer
    @close="consoleModal()"
    title="Using Component Methods"
  >
    <Flight :flightItem="flightItem" />
  </b-modal>
</template>

<script>
import axios from "axios";
import Flight from "./flight.vue";

export default {
  name: "Modal",
  props: ["flight"],
  components: {
    Flight
  },
  data: () => {
    return {
      flightItem: {}
    };
  },
  methods: {
    showModal() {
      this.$refs["modalWindow"].show();
    },

    consoleModal() {
      this.$router.go(-1);
    }
  },

  created() {
    if (!this.flight) {
      axios
        .get("https://api.spacexdata.com/v3/launches/past")
        .then(response => {
          this.flightItem = response.data.filter(
            item => item.launch_date_unix === Number(this.$route.params.id)
          )[0];
        });
    } else this.flightItem = this.flight;
  },
  mounted() {
    this.showModal();
  }
};
</script>
