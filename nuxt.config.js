export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Dominik Wurm",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism.",
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism."
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism."
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: "/img/shareimage.jpg"
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism."
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism."
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "/img/shareimage.jpg"
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: "/img/shareimage.jpg"
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: "I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism."
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', type: 'image/png', href: '/favicons/site.webmanifest' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/fonts.scss',
    '@/assets/scss/typo.scss',
    '@/assets/scss/main.scss',
    '@/assets/scss/utilities.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      './assets/scss/variables.scss',
      './assets/scss/mixins.scss',
    ]
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
