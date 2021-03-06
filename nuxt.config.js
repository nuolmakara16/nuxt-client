import colors from 'vuetify/es5/util/colors'

export default {
  /*
 ** Nuxt rendering mode
 ** See https://nuxtjs.org/api/configuration-mode
 */
  ssr: true,
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - client_nuxt',
    title: 'client_nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-draggable.js'},
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.red,
        },
        light: {
          primary: colors.blue.darken1, // #E53935
          secondary: colors.grey.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    // API Credential
    API_URL: process.env.API_URL,
    PASSPORT_CLIENT_SECRET: process.env.PASSPORT_CLIENT_SECRET,
    PASSPORT_CLIENT_ID: process.env.PASSPORT_CLIENT_ID,
    PASSPORT_GRANT_TYPE: process.env.PASSPORT_GRANT_TYPE,
    // Google Credential
    AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
    AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    AUTH_GOOGLE_REDIRECT_URI: process.env.AUTH_GOOGLE_REDIRECT_URI,
  },
  axios: {
    proxy: true,
    baseURL: process.env.API_URL,
  },
  proxy: {
    '/backend': {
      target: process.env.API_URL,
      pathRewrite: { '^/backend': '/' }
    }
  },
  auth: {
    auth: {
      redirect: {
        login: '/login',
        logout: '/',
        home: '/dashboard',
        callback: '/login'
      }
    },
    strategies: {
      google: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: undefined,
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
        },
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
        responseType: 'token id_token',
        clientId:  process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
        redirectUri: 'http://127.0.0.1:3000',
      },
      laravelPassportPasswordGrant: {
        name: 'laravelPassportPassword',
        provider: 'laravel/passport',
        url: '/backend',
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints: {
          logout: { url: '/logout', method: 'delete' },
          user: { url: '/user/profile', method:'get'},
        },
        clientId: process.env.PASSPORT_CLIENT_ID,
        clientSecret: process.env.PASSPORT_CLIENT_SECRET,
        grantType: 'password',
        rewriteRedirects: '/dashboard'
      },
    },
  },

  // serverMiddleware: ['~/server-middleware/logger'],

  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0', // default: localhost,
  //   timing: false
  // }
}
