<template>
  <main>
    <lib-title>
      I'm Dominik, a coding Designer from Austria, striving for visual clarity
      and simplicity.
    </lib-title>
    <p>
      Currently I’m working as a
      <strong>Product & Brand Designer</strong> at
      <lib-link :href="'https://blockpit.io'">Blockpit</lib-link>, supporting
      thousands of Users with their crypto taxes. Previously I worked as a
      <strong>UX Engineer</strong> at
      <lib-link :href="'https://storyclash.com'">Storyclash</lib-link>.
    </p>
    <p>
      If you want to follow my journey, you can do so on
      <lib-link :href="'https://twitter.com/wurmdo'">Twitter</lib-link>,
      <lib-link :href="'https://dribbble.com/dowu'">Dribbble</lib-link>,
      <lib-link :href="'https://linkedin.com/in/dowu'">LinkedIn</lib-link>
      or
      <lib-link :href="'https://github.com/dowu'">GitHub</lib-link>
    </p>

    <template v-for="article of articles">
      <h2>
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          {{ article.title }}
        </nuxt-link>
        <code v-if="!article.completed" class="ml-2">WIP</code>
      </h2>
      <nuxt-content :document="article" />
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
};
</script>