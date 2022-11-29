<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: "CO2Table",

  data: () => ({
    headers: [
      { text: "Company Name", value: "companyName"},
      { text: "Country", value: "country" },
      { text: "CO² Emissions", value: "co2emissions" },
    ],
    itemsPerPage: 5,
    items: [],
  }),
  beforeMount () {
    axios
      .get('/api/data')
      .then(response => {
        this.items = response.data;
        console.log(response);
      })
  }
};
</script>
