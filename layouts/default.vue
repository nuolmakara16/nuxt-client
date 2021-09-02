<template>
  <v-app>
    <v-app-bar app class='px-10'>
      <v-toolbar-title>
        <nuxt-link style='text-decoration: none' to='/'>
          <v-btn :class="$vuetify.theme.dark ? 'black--text': 'white--text'"
                 :color="$vuetify.theme.dark? 'white':'black'"
                 :dark='!$vuetify.theme.dark' large>
            DEV CRUNCH
          </v-btn>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :color="($vuetify.theme.dark) ? 'white' : 'black'"
        fab
        small
        @click='changeTheme'
      >
        <v-icon :color="($vuetify.theme.dark) ? 'black' : 'white'">
          {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
      </v-btn>
      <v-btn v-if="$route.path!=='/login'" class='mx-2' outlined to='/login'>
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
      localStorage.setItem('darkMode', this.$vuetify.theme.dark ? 'true' : 'false')
    },
    logout() {
      this.$auth.logout()
      this.$router.push('/')
    },
  }
}
</script>

<style>
.my-toolbar {
  width: 80%;
  left: 10%;
  margin: auto
}
</style>
