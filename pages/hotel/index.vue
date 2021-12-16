<template>
  <div>
    <ul v-for='hotel in hotels' :key='hotel.id'>
      <li>{{ hotel.name }} {{ $moment(hotel.created_at).format('DD-MMMM-yyyy HH:mm') }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      hotels : [],
    }
  },

  mounted() {
    this.methodGetHotels()
  },
  methods: {
    async methodGetHotels() {
      const url = 'http://localhost:8000/hotels'
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
      await this.$axios.$get(url, config).then((res) => {
        this.hotels = res
      })
    }
  }
}
</script>
