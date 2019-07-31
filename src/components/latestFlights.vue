<template>
  <div class="latest-flights">
    <Preloader v-if="preloader" />
    <b-container v-else>
      <b-row>
        <b-col
          v-for="(flight, index) in this.flights"
          :key="index"
          lg="4"
          md="6"
          sm="6"
          xs="12"
          class="flight-item shadow-sm p-3 mb-5 rounded"
        >
          <div class="card-item">
            <div class="flight-item__row">
              <label>Launch Site</label>
              <p>{{ flight.launch_site.site_name_long }}</p>
            </div>
            <div class="flight-item__row">
              <label>Flight Number</label>
              <p>{{ flight.flight_number }}</p>
            </div>
            <div class="flight-item__row">
              <label>Rocket Name</label>
              <p>{{ flight.rocket.rocket_name }}</p>
            </div>
            <div class="flight-item__row">
              <label>Mission Name</label>
              <p>{{ flight.mission_name }}</p>
            </div>
            <div class="flight-item__row">
              <label>Launch Date</label>
              <p>
                {{
                  moment
                    .unix(flight.launch_date_unix)
                    .format("MMMM Do YYYY, h:mm:ss")
                }}
              </p>
            </div>
            <div class="flight-item__row">
              <label>Status</label>
              <p>
                <b-badge :variant="badge(flight)">
                  {{
                    flight.launch_success ? "Success" : "Failure"
                  }}
                </b-badge>
              </p>
            </div>
            <router-link
              :to="{
                name: 'flight',
                params: { id: flight.launch_date_unix, flight: flight }
              }"
            >
              <b-button
                block
                variant="outline-info"
              >
                More info
              </b-button>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Preloader from './preloader';

export default {
  name: "Latest",

  data: () => {
    return {
      flights: [],
      preloader: true
    };
  },

  components:{
    Preloader
  },

  mounted() {
    axios
      .get("https://api.spacexdata.com/v3/launches/past")
      .then(response => {
        this.flights = response.data.reverse();
      })
      .finally(() => {
        this.preloader = false
      });
  },

  methods: {
    badge(flight) {
      return flight.launch_success ? "success" : "secondary";
    }
  }
};
</script>
