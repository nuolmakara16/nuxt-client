<template>
  <v-app>
    <v-app-bar app :class="$vuetify.breakpoint.smAndUp? 'px-10':'pb-1'"  elevate-on-scroll>
      <v-btn
        v-if='$vuetify.breakpoint.smAndDown'
        :class="$vuetify.theme.dark ? 'black--text': 'white--text'"
        :color="$vuetify.theme.dark? 'white':'black'"
        :dark='!$vuetify.theme.dark'
        block
        x-large
      >
        DEV CRUNCH
      </v-btn>
      <v-toolbar-title v-if='$vuetify.breakpoint.smAndUp'>
        <nuxt-link style='text-decoration: none' to='/'>
          <v-btn
            :class="$vuetify.theme.dark ? 'black--text': 'white--text'"
            :color="$vuetify.theme.dark? 'white':'black'"
            :dark='!$vuetify.theme.dark'
            large
          >
            DEV CRUNCH
          </v-btn>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="$route.path!=='/login' && $vuetify.breakpoint.mdAndUp">
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
      <v-btn v-if="$route.path!=='/login' && $vuetify.breakpoint.mdAndUp" class='mx-2' outlined to='/login'>
        Sign In
      </v-btn>
      <v-btn v-if='$vuetify.breakpoint.mdAndUp' text fab small @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-tune-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
        <v-btn
          v-show="fab"
          v-scroll="onScroll"
          fab
          fixed
          bottom
          right
          :dark='$vuetify.theme.dark'
          :color="$vuetify.theme.dark ? 'white' : 'black'"
          @click="toTop"
        >
          <v-icon :color="$vuetify.theme.dark ? 'black' : 'white'">mdi-rocket</v-icon>
        </v-btn>
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
  data() {
    return {
      right: true,
      rightDrawer: false,
      fab: false,
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
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
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style>
#arrow {
  position: relative;
  left: 0;
  transition: left ease 0.25s;
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
