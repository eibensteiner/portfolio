<template>
  <main class="main">
    <Header :title="thought.title" :subtitle="{ date: thought.createdAt }" />
    <div class="container-outer">
      <hr />
      <nuxt-content :document="thought" />
      <hr />
    </div>
  </main>
</template>

<script>
import getMeta from "../../utils/getMeta";

export default {
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.thought.title,
        description: this.thought.subtitle,
        url: `${this.$config.baseUrl}/thoughts/${this.$route.params.slug}`,
        mainImage: this.thought.image,
      };
      return getMeta(metaData);
    },
  },
  head() {
    return {
      title: this.thought.title,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.thought.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.thought.updatedAt,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://dowu.xyz/thoughts${this.$route.params.slug}`,
        },
      ],
    };
  },

  async asyncData({ $content, params }) {
    const thought = await $content("thoughts", params.slug).fetch();
    return { thought };
  },
};
</script>