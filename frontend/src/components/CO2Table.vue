<template>
  <v-container fluid>
    <v-spacer></v-spacer>
    <v-text-field
        v-model="search"
        class="text-input"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "CO2Table",

  data: () => ({
    headers: [
      { text: "Company Name", value: "companyName"},
      { text: "Country", value: "country" },
      { text: "CO² Emissions in kg pro Jahr", value: "co2emissions" },
    ],
    itemsPerPage: 5,
    items: [],
    search: '',
  }),
  beforeMount () {
    fetch('/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-cache'
    })
    .then((response) => response.json())
    .then(response => {
      this.items = response;
    })
    .catch(error => {
      console.error(error);
    })
  }
};
</script>

<style lang="scss" scoped>
.text-input {
  max-width: 200px;
}

</style>