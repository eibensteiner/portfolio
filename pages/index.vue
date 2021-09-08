<template>
  <main>
    <p>
      I'm <strong>Dominik</strong>, a coding
      <strong>designer based in Linz, Austria</strong>.
    </p>
    <p>
      Currently I’m working as a
      <strong>Product & Brand Designer</strong> at
      <lib-link :href="'https://blockpit.io'">Blockpit</lib-link>, supporting
      thousands of Users with their crypto taxes.
    </p>
    <p>
      If you want to follow my journey, you can do so on
      <lib-link :href="'https://twitter.com/wurmdo'">Twitter</lib-link>,
      <lib-link :href="'https://dribbble.com/dowu'">Dribbble</lib-link>,
      <lib-link :href="'https://linkedin.com/in/dowu'">LinkedIn</lib-link>
      or
      <lib-link :href="'https://github.com/dowu'">GitHub</lib-link>
    </p>
    <p>If you want to discover all pages, you can simply hit <code>cmd k</code>literally anywhere</p>

    <template v-for="article of articles">
      <h1>
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          {{ article.title }}
        </nuxt-link>
      </h1>
      <nuxt-content :document="article" />
      <div class="flex items-center mt-9">
        <lib-link-block
          :title="'Read on a seperate Page'"
          :href="'/'"
          class="mr-2"
        ></lib-link-block>
        <span class="mr-2 text-gray-300 font-normal text-base">-</span>
        <span class="text-gray-700 font-normal text-base"
          >Posted on {{ formatDate(article.createdAt) }}</span
        >
      </div>
    </template>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const articles = await $content(params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>