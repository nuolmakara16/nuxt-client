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
      <v-menu offset-y>
        <template #activator='{ on, attrs }'>
          <v-btn v-bind='attrs' class='admin' outlined v-on='on'>
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
      <v-btn v-if='$vuetify.breakpoint.mdAndUp' text fab small class='mx-2' @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-tune-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <strong>Settings</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-btn
            v-if='$vuetify.breakpoint.mdAndUp'
            :color="($vuetify.theme.dark) ? 'white' : 'black'"
            fab
            small
            class='mr-2'
            @click='changeTheme'
          >
            <v-icon :color="($vuetify.theme.dark) ? 'black' : 'white'">
              {{ ($vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
            </v-icon>
          </v-btn>
          <strong>Dark Mode</strong>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  // middleware: ['auth', 'is-admin'],
  data() {
    return {
      drawer: true,
      darkMode: localStorage.getItem('darkMode'),
      right: true,
      rightDrawer: false,
    }
  },
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
