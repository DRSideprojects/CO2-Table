<template>
  <div class="home">
    <CO2Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import CO2Table from '@/components/CO2Table.vue'

export default {
  name: 'HomeView',
  components: {
    CO2Table
  }
}
</script>
