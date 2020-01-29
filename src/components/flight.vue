<template>
  <b-container v-if="this.flightItem">
    <b-jumbotron :header="jumboHeader()">
      <p class="details">{{ this.flightItem.details }}</p>
      <b-row align-h="center">
        <b-col lg="6" md="6" sm="6" xs="12" class="shadow-sm p-3 mb-5 bg-white rounded">
          <div class="flight-item__row">
            <label>Launch Site</label>
            <p>{{ this.flightItem.launch_site.site_name_long }}</p>
          </div>
          <div class="flight-item__row">
            <label>Flight Number</label>
            <p>{{ this.flightItem.flight_number }}</p>
          </div>
          <div class="flight-item__row">
            <label>Rocket Name</label>
            <p>{{ this.flightItem.rocket.rocket_name }}</p>
          </div>
          <div class="flight-item__row">
            <label>Mission Name</label>
            <p>{{ this.flightItem.mission_name }}</p>
          </div>
          <div class="flight-item__row">
            <label>Launch Date</label>
            <p>
              {{
              moment
              .unix(this.flightItem.launch_date_unix)
              .format("MMMM Do YYYY, h:mm:ss")
              }}
            </p>
          </div>
          <div class="flight-item__row">
            <label>Status</label>
            <p>
              <b-badge :variant="badge(this.flightItem)">
                {{
                this.flightItem.launch_success ? "Success" : "Failure"
                }}
              </b-badge>
            </p>
          </div>
        </b-col>
        <b-col
          lg="6"
          md="6"
          sm="6"
          xs="12"
          v-if="
              this.flightItem.links.flickr_images &&
                this.flightItem.links.flickr_images.length
            "
        >
          <gallery :images="this.flightItem.links.flickr_images" />
        </b-col>
      </b-row>
      <div class="video" v-if="this.flightItem.links.youtube_id">
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="generateVudeoUrl(this.flightItem.links.youtube_id)"
          allowfullscreen
        ></b-embed>
      </div>
    </b-jumbotron>
  </b-container>
</template>

<script>
import gallery from "./gallery.vue";

export default {
  name: "Flight",

  components: {
    gallery
  },
  props: ["flightItem"],

  methods: {
    jumboHeader() {
      return this.flightItem.mission_name;
    },

    badge(flightItem) {
      return flightItem.launch_success ? "success" : "secondary";
    },

    generateVudeoUrl(url) {
      return `https://www.youtube.com/embed/${url}`;
    }
  }
};
</script>

<style scoped>
.details {
  margin: 30px 0;
  text-align: justify;
}

.video {
  margin: 80px 0;
}
</style>
