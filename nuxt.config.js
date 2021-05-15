import getMeta from "./utils/getMeta";
import getRoutes from "./utils/getRoutes";

const meta = getMeta();

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "Dominik Wurm",
    meta: [
      ...meta,
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: "Dominik Wurm" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:site", content: "@wurmdo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://dowu.xyz",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/medium-zoom"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxtjs/tailwindcss",
    "@nuxt/typescript-build",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/style-resources",
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  sitemap: {
    hostname: "https://dowu.xyz",
    routes() {
      return getRoutes();
    },
  },
};
