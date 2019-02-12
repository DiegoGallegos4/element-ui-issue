const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src:'~plugins/auth.js', ssr: false },
    '~plugins/axios.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
  ],
  /*
  ** Auth module configuration
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: 'auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: {url: 'auth/user', method: 'get', propertyName: false}
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: '495551984268171',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email' ]
      },
    },
    redirect: {
      login: false,
      callback: 'http://localhost:3000/'
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://localhost:4000/api/v1'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })

        config.devtool = "#sourcemap"
      }
    }
  }
}
