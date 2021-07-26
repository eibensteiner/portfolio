<template>
  <div>
    <h1 class="relative inline-flex items-center">
      <nuxt-link
        :to="'/'"
        :class="'rounded-full bg-gray-50 border-gray-200 border h-7 w-7 flex items-center justify-center absolute -left-14 hover:bg-gray-100 transition cursor-pointer'"
      >
        <icon-arrow-left />
      </nuxt-link>
      {{ article.title }}
      <code v-if="!article.completed" class="ml-3">WIP</code>
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
    return { article };
  },
};
</script>

<style scoped>
::v-deep .nuxt-content h3 {
  @apply text-lg text-gray-900 font-semibold w-full mb-3 mt-14;
}
</style>