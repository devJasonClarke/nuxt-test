export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  generate: {
    routes: ["/posts/jason", "/posts/leroy", "/posts/genna", "/posts/bops"]
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "learning-2",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: true,
  loading: {
    color: "gold",
    height: "5px"
  },
  pageTransition: {
    name: 'home',
    mode: 'out-in'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/sass/index.scss"

],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [  "@/plugins/aos.client", {src: '@/plugins/jarallax', ssr: false}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
