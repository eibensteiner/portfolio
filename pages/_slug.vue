<template>
  <div>
    <h1 class="relative">
      {{ article.title }}
    </h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
import getMeta from "../utils/getMeta";
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
  methods: {
    formatDate(date) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("en", options);
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
    const article = await $content(params.slug).fetch();
    const [prev, next] = await $content()
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return { article, prev, next };
  },
};
</script>