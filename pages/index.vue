<template>
  <main>
    <h1>
      I'm Dominik, a coding Designer from Austria, striving for visual clarity
      and simplicity.
    </h1>
    <div>
      <div>
        <p>
          Currently I’m working as a
          <strong>Product & Brand Designer</strong> at
          <a href="https://blockpit.io" target="_blank" rel="noopener">Blockpit</a>, supporting
          thousands of Users with their crypto taxes. Previously I worked as a
          <strong>UX Engineer</strong> at
          <a href="https://storyclash.com" target="_blank" rel="noopener">Storyclash</a>.
        </p>
        <p>
          If you want to follow my journey, you can do so on
          <a href="https://twitter.com/wurmdo" target="_blank" rel="noopener"> Twitter</a>,
          <a href="https://dribbble.com/dowu" target="_blank" rel="noopener">Dribbble</a>,
          <a href="www.linkedin.com/in/dowu" target="_blank" rel="noopener">LinkedIn</a> or
          <a href="https://github.com/dowu" target="_blank" rel="noopener">GitHub</a>
        </p>
      </div>

      <div v-for="article of articles" :key="article.slug">
        <h2>
          <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
            {{ article.title }}
          </nuxt-link>
          <code v-if="!article.completed" class="ml-2">WIP</code>
        </h2>
        <nuxt-content :document="article" />
      </div>
    </div>
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