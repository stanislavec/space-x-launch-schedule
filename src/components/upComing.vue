<template>
  <div class="up-coming-flights">
    <b-container>
      <b-row>
        <router-link v-for="flight in this.flights" :to="{ name: 'flight', params: { id: flight.launch_date_unix }}">
          <b-col cols="6" md="4" class="flight-item">
            <div class="flight-item__row">
              <label>Launch Site</label>
              <p>{{flight.launch_site.site_name_long}}</p>
            </div>
            <div class="flight-item__row">
              <label>Flight Number</label>
              <p>{{flight.flight_number}}</p>
            </div>
            <div class="flight-item__row">
              <label>Mission Name</label>
              <p>{{flight.mission_name}}</p>
            </div>
            <div class="flight-item__row">
              <label>Launch Date</label>
              <p>{{moment.unix(flight.launch_date_unix).format('MMMM Do YYYY, h:mm:ss')}}</p>
            </div>
          </b-col>
        </router-link>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import BootstrapVue from 'bootstrap-vue';

export default {
  name: "UpComing",
  data: () => {
    return {
      flights: []
    };
  },

  mounted() {
    axios
      .get("https://api.spacexdata.com/v3/launches/upcoming")
      .then(response => (this.flights = response.data));
  }
};
</script>
