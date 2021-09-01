<template>
  <v-app>
    <v-app-bar app class="px-10">
      <v-toolbar-title>
        <nuxt-link to='/' style='text-decoration: none'>
          <v-btn :color="$vuetify.theme.dark? 'white':'black'" :dark='!$vuetify.theme.dark' :class="$vuetify.theme.dark ? 'black--text': 'white--text'" large >DEV</v-btn>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        fab
        small
        :color="($vuetify.theme.dark) ? 'white' : 'black'"
        @click="changeTheme"
      >
        <v-icon :color="($vuetify.theme.dark) ? 'black' : 'white'">
          {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
      </v-btn>
      <v-btn v-if="$route.path!=='/login'" to='/login' outlined  class='mx-2'>
        Sign In
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      darkMode: localStorage.getItem('darkMode')
    }
  },
  mounted() {
    this.darkMode = localStorage.getItem('darkMode')
    this.$vuetify.theme.dark = this.darkMode === 'true'
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkMode',this.$vuetify.theme.dark ? 'true' : 'false')
    }
  }
}
</script>

<style>
.my-toolbar { width: 80%; left:  10%; margin: auto}
</style>
