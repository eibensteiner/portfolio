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
    <div class="flex flex-wrap gap-6 mt-20">
      <div class="flex flex-col flex-1 gap-6">
        <card-about></card-about>
        <div class="card bg-gray-900 h-80">a</div>
        <card-gallery></card-gallery>
      </div>
      <div class="flex flex-col flex-1 gap-6">
        <div class="card bg-gray-100 h-80">a</div>
        <div class="card bg-gray-100 h-146">a</div>
      </div>
    </div>

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