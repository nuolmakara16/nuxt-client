<template>
  <v-app>
    <v-app-bar app class='px-10' elevate-on-scroll>
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
      <div v-if="$route.path!=='/login'">
        <v-menu v-for='(category, i) in categories' :key='i' min-width='200' offset-y open-on-hover slide-y-transition
                tile transition='fade-transition'>
          <template #activator='{ on, attrs }'>
            <v-btn v-bind='attrs' id='green-text' class='admin' text tile v-on='on'>
              {{ category.name }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for='(item, i) in category.sub' :key='i'>
              <v-list-item-title class='px-4'>
                <a id='arrow'
                   :href='`https://nuxtjs.org/docs/2.x/${item.url}`'
                   style='cursor: pointer; text-decoration: none; color: black'
                   :class="$vuetify.theme.dark ? 'night-mode': ''"
                   target='_blank'>
                  {{ item.title }}
                </a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
      darkMode: localStorage.getItem('darkMode'),
      categories: [
        {
          name: 'Get Started', sub: [
            { title: 'Installation', url: '/get-started/installation' },
            { title: 'Routing', url: '/get-started/routing' },
            { title: 'Directory Structure', url: '/get-started/directory-structure' },
            { title: 'Commands and Deployment', url: '/get-started/commands' },
            { title: 'Conclusion', url: '/get-started/conclusion' },
            { title: 'Upgrading', url: '/get-started/upgrading' }
          ]
        },
        {
          name: 'Concepts',
          sub: [
            { title: 'Views', url: '/concepts/views' },
            { title: 'Context and Helpers', url: '/concepts/context-helpers' },
            { title: 'Server Side Rendering', url: '/concepts/server-side-rendering' },
            { title: 'Static Site Generation', url: '/concepts/static-site-generation' },
            { title: 'Nuxt Life', url: '/concepts/nuxt-lifecycle' }
          ]
        },
        {
          name: 'Features',
          sub: [
            { title: 'Rendering', url: '/features/rendering-modes' },
            { title: 'Deployment Target', url: '/features/deployment-targets' },
            { title: 'File System Routing', url: '/features/file-system-routing' },
            { title: 'Data Fetching', url: '/features/data-fetching' },
            { title: 'Data Fetching', url: '/features/meta-tags-seo' },
            { title: 'Meta Tage and SEO', url: '/features/meta-tags-seo' }
          ]
        }
      ]
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
    }
  }
}
</script>

<style>
#arrow {
  position: relative;
  left: 0;
  transition: left ease 0.5s;
}

#arrow:hover {
  left: 10px;
  color: #3fb984 !important;
}

#green-text:hover {
  color: #3fb984 !important;
}

.night-mode {
  color: #f5f5f5!important;
}
</style>
