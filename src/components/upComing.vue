<template>
  <div class="up-coming-flights">
    <b-container>
      <b-row>
        <b-col
          v-for="(flight, index) in upComingFlights"
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
              <label>Mission Name</label>
              <p>{{ flight.mission_name }}</p>
            </div>
            <div class="flight-item__row">
              <label>Launch Date</label>
              <p>
                {{ moment.unix(flight.launch_date_unix).format('MMMM Do YYYY, h:mm:ss') }}
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UpComing',
  methods: mapActions(['fetchUpCominglights']),
  computed: mapGetters(['upComingFlights']),
  beforeMount() {
    !this.upComingFlights ? this.fetchUpCominglights() : '';
  },
};
</script>
