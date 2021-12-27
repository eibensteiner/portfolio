import getMeta from "./utils/getMeta";
import getRoutes from "./utils/getRoutes";

const meta = getMeta();

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: "static",
  loading: false,
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
      { rel: "icon", type: "image/png", href: "/favicons/favicon.png" },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://dominik.is",
      },
    ],
    script: [
      {
        src: "https://cdn.splitbee.io/sb.js",
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/lazysizes.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@aceforth/nuxt-optimized-images",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-content-body-html",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/feed",
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    },
  },

  // Sitemap
  sitemap: {
    hostname: "https://dominik.is",
    routes() {
      return getRoutes();
    },
  },

  feed: [
    {
      create: async (feed) => {
        const $content = require("@nuxt/content").$content;
        feed.options = {
          title: "Dominik Wurm",
          link: "https://dominik.is",
          description:
            "I'm Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism.",
        };

        const posts = await $content().sortBy("createdAt", "desc").fetch();
        posts.forEach((post) => {
          const url = `https://dominik.is/${post.slug}`;
          feed.addItem({
            content: post.bodyHtml,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          });
        });
      },
      path: "/feed",
      type: "rss2",
    },
  ],

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  // Optimize Images
  optimizedImages: {
    optimizeImages: true,
  },
};
