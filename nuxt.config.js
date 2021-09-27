const axios = require("axios")
require("dotenv").config()

// TODO: site descr

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "#NEWKITH", // Change in package.json files
    script: [
      {
        innerHTML: `
    ;(function(l, e, a, d, i, n, f, o) {
      if (!l[i]) {
        l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || []
        l.GlobalLeadinfoNamespace.push(i)
        l[i] = function() {
          ;(l[i].q = l[i].q || []).push(arguments)
        }
        l[i].t = l[i].t || n
        l[i].q = l[i].q || []
        o = e.createElement(a)
        f = e.getElementsByTagName(a)[0]
        o.async = 1
        o.src = d
        f.parentNode.insertBefore(o, f)
      }
    })(
      window,
      document,
      "script",
      "https://cdn.leadinfo.net/ping.js",
      "leadinfo",
      "LI-6047499C276BE"
    )`
      },
      {
        hid: 'mcjs',
        innerHTML: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/45a5561023842caf04f0cb311/5185b68e630c282a0f3a2caff.js");`
      }
    ],
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Amsterdam based influencer marketing agency that strongly believes in the new media."
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      },
      {
        name: "facebook-domain-verification",
        content: "rypsilsadpawbva8w9mgo6mfxr6834"
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    "@/assets/styles/reset.css",
    "@/assets/styles/reset-form.css",
    "@/assets/styles/transitions.sass",
    "@/assets/styles/variables.sass",
    "@/assets/styles/typography.sass",
    "@/assets/styles/body.sass"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/components",
    "~/plugins/filters",
    "~/plugins/vue-lazyload",
    "~/plugins/gtm"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? process.env.PUBLICKEY
            : process.env.PREVIEWKEY,
        cacheProvider: "memory"
      }
    ],
    "@nuxtjs/gtm"
  ],
  gtm: {
    enabled: true,
    debug: true,
    id: "GTM-KK8GW2F"
  },
  generate: {
    routes: function(callback) {
      const token = process.env.PUBLICKEY
      const version = "published"
      let cache_version = 0

      let toIgnore = ["home", "en/settings"]

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    },
    fallback: true
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
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    // Transpile GSAP for server side rendering
    transpile: ["gsap"]
  },
  buildModules: [
    "@nuxtjs/pwa",
    [
      "@aceforth/nuxt-optimized-images",
      {
        optimizedImages: {
          optimizeImages: true
        }
      }
    ]
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: "GTM-KK8GW2F"
    //   }
    // ]
  ]
}
