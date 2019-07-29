<template>
  <div class="latest-flights">
    <b-container>
      <b-row>
        <b-col cols="6" md="4" class="flight-item" v-for="flight in this.flights">
          <div class="flight-item__row">
            <label>Launch Site</label>
            <p>{{flight.launch_site.site_name_long}}</p>
          </div>
          <div class="flight-item__row">
            <label>Flight Number</label>
            <p>{{flight.flight_number}}</p>
          </div>
          <div class="flight-item__row">
            <label>Rocket Name</label>
            <p>{{flight.rocket.rocket_name}}</p>
          </div>
          <div class="flight-item__row">
            <label>Mission Name</label>
            <p>{{flight.mission_name}}</p>
          </div>
          <div class="flight-item__row">
            <label>Launch Date</label>
            <p>{{moment.unix(flight.launch_date_unix).format('MMMM Do YYYY, h:mm:ss')}}</p>
          </div>
          <div class="flight-item__row">
            <label>Status</label>
            <p>{{flight.launch_success ? 'Success' : 'Failure'}}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Latest",

  data: () => {
    return {
      flights: []
    };
  },

  mounted() {
    axios.get("https://api.spacexdata.com/v3/launches/past").then(response => {
      this.flights = response.data.reverse();
    });
  }
};
</script>
