<template>
  <v-app id='inspire'>
    <v-navigation-drawer
      v-model='drawer'
      app
    >
      <v-list-item class='px-2 my-1'>
        <v-list-item-avatar></v-list-item-avatar>
        <v-list-item-title>
          <strong>DEV CRUNCH</strong>
        </v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <!--Dashboard-->
        <v-list-item-group mandator>
          <v-list-item to='/dashboard'>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <!--/Dashboard-->
        <!--Dashboard-->
        <v-list-item-group mandator>
          <v-list-item to='/users'>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <!--/Dashboard-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click='drawer = !drawer'></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        :color="($vuetify.theme.dark) ? 'white' : 'black'"
        class='mx-2'
        fab
        small
        @click='changeTheme'
      >
        <v-icon :color="($vuetify.theme.dark) ? 'black' : 'white'">
          {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
      </v-btn>
      <v-menu offset-y>
        <template #activator='{ on, attrs }'>
          <v-btn v-if='$auth.user.data.name' v-bind='attrs' class='admin' outlined v-on='on'>
            {{ $auth.user.data.name }}
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
          <v-btn v-else v-bind='attrs' class='admin' outlined v-on='on'>
            Administrator
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click='logout'>
            <v-icon>mdi-logout</v-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
  middleware: ['auth', 'is-admin'],
  data: () => ({ drawer: true, darkMode: localStorage.getItem('darkMode') }),
  mounted() {
    this.darkMode = localStorage.getItem('darkMode')
    this.$vuetify.theme.dark = this.darkMode === 'true'
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/')
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkMode', this.$vuetify.theme.dark ? 'true' : 'false')
    }
  }
}
</script>
