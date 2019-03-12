const pkg = require('./package')

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.kartzapp.com/api/v1'
    : 'http://localhost:4000/api/v1'

module.exports = {
  mode: 'universal',

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
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', 'swiper/dist/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/auth.js', ssr: false },
    '~plugins/axios.js',
    { src: '~plugins/swiper.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.js'
          },
          {
            code: 'es',
            iso: 'es-ES',
            file: 'es.js'
          },
          {
            code: 'pt',
            iso: 'pt-BR',
            file: 'pt.js'
          }
        ],
        lazy: true,
        langDir: 'i18n/',
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es'
        }
      }
    ],
    'nuxt-leaflet',
    'nuxt-element-ui'
  ],
  elementUI: {
    components: [
      'Button',
      'MenuItem',
      'Scrollbar',
      'Row',
      'Col',
      'Form',
      'FormItem',
      'Main',
      'Autocomplete',
      'Dialog',
      'Select',
      'TimeSelect',
      'Option',
      'Input',
      'InputNumber',
      'Upload',
      'Breadcrumb',
      'BreadcrumbItem',
      'Table',
      'TableColumn',
      'Header',
      'Container',
      'Tabs',
      'TabPane',
      'Menu',
      'Icon',
      'Notification',
      'Loading'
    ],
    locale: 'en'
  },
  /*
   ** Auth module configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/signin',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url: 'auth/user',
            method: 'get',
            propertyName: false
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      register: {
        endpoints: {
          login: {
            url: 'auth/signup',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url: 'auth/user',
            method: 'get',
            propertyName: false
          }
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: '495551984268171',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email']
      }
    },
    redirect: {
      login: false,
      callback: '/'
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL
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
          exclude: /(node_modules)/
        })

        config.devtool = '#sourcemap'
      }
    },
    maxChunkSize: 300000
  },
  srcDir: './',
  performance: {
    gzip: false
  },
  router: {
    base: '/'
  },
  dev: process.env.NODE_ENV === 'dev'
}
