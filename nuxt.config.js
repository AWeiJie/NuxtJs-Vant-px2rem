console.log('process.env.MODE:', process.env.MODE)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   * 设置全局的TDK
   */
  head: {
    title: '艺创商城',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'ZH'
      },
      {
        name: 'baidu-site-verification',
        content: 'dV1cBLUtpA'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js'
      }
    ]
  },
  router: {
    base: '/', // 统一前缀
    middleware: ['device'],
    extendRoutes(routes, resolve) {
      // // 默认路由重定向到shop
      // routes.push({
      //   name: "home",
      //   path: "/",
      //   component: resolve(__dirname, "pages/shop/index.vue")
      // });
      // routes.push({
      //   name: "search",
      //   path: "/shop/shopping/search/search",
      //   component: resolve(__dirname, "pages/shop/search/index.vue")
      // });
    }
  },

  /**
   * 环境变量配置
   */
  env: {
    NODE_ENV: process.env.NODE_ENV,
    MODE: process.env.MODE
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~sass/reset.css', '~sass/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    {
      src: '~helpers/flexible.min.js',
      ssr: false
    },
    { src: '~/plugins/component.js', ssr: true },
    { src: '@/plugins/vant-ui', ssr: true },
    { src: '~/plugins/count-rem.js', ssr: true },
    { src: './helpers/directives.js', ssr: false }
  ],
  /**
   * loading页面
   */
  loading: '@/components/loading.vue',
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  styleResources: {
    scss: './assets/css/*.scss'
    // sass: ...
  },

  axios: {
    proxy: false,
    retry: { retries: 1 } //自动重试机制
  },

  /*
   ** You can extend webpack config here
   */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    filenames: {
      // css 和 js  img 打包时指定文件夹
      app: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
      css: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : '[hash:7].[ext]')
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue|scss)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend(config, ctx) {},
    // babel处理依赖包vant里面的代码
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            style: name => {
              return `${name}/style/less.js`
            }
          },
          'vant'
        ]
      ]
    },
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 75,
          propList: ['*'],
          selectorBlackList: ['van-']
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
