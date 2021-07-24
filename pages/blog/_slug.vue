<template>
  <div>
    <h2 class="relative">
      <nuxt-link
        :to="'/'"
        :class="'rounded-full bg-gray-50 border-gray-200 border h-7 w-7 flex items-center justify-center absolute -left-14 hover:bg-gray-100 transition cursor-pointer'"
      >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </nuxt-link>
      {{ article.title }}
      <badge v-if="!article.completed" :text="'WIP'" />
    </h2>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
import getMeta from "../../utils/getMeta";
export default {
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.subtitle,
        url: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        mainImage: this.article.image,
      };
      return getMeta(metaData);
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return { article };
  },
};
</script>