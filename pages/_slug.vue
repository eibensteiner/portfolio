<template>
  <div>
    <h1 class="relative">
      {{ article.title }}
    </h1>
    <nuxt-content :document="article" />
    <lib-banner class="mt-10">
      <template v-slot:title>
        <h3 class="mt-0">Feedback or Questions?</h3>
      </template>
      <template v-slot:subtitle>
        <p class="mb-0">
          Do you have any questions or comments about this post? Just drop me a
          line on
          <lib-link :href="'https://twitter.com/wurmdo'">Twitter</lib-link> or
          <lib-link :href="'mailto:me@dowu.xyz'">send me a mail</lib-link>.
        </p>
      </template>
    </lib-banner>
    <div class="flex items-center mt-9">
      <span class="mr-2  font-medium text-base">-</span>
      <span class=" font-medium text-base"
        >Posted on {{ formatDate(article.createdAt) }}</span
      >
    </div>
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

<style scoped>
::v-deep .nuxt-content h3 {
  @apply text-lg font-semibold w-full mb-3 mt-14;
}
</style>