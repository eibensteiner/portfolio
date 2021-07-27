<template>
  <main>
    <h1>I'm Dominik, a coding Designer from Austria, striving for visual clarity and simplicity.</h1>
    <div>
      <div>
        <p>
          Currently I’m working as a <strong>Product & Brand Designer</strong> at
          <a href="https://blockpit.io" target="_blank"> Blockpit </a>, supporting thousands of Users with their crypto
          taxes. Previously I worked as a <strong>UX Engineer</strong> at <a href="https://storyclash.com" target="_blank"> Storyclash </a>.
        </p>
        <p>
          If you want to follow my journey, you can do so on
          <a href="https://twitter.com/wurmdo" target="_blank"> Twitter </a>, <a href="www.linkedin.com/in/dowu" target="_blank"> LinkedIn </a> or
          <a href="https://github.com/dowu" target="_blank"> GitHub </a>. You can also send me a message to
          <a href="mailto:me@dowu.xyz" target="_blank"> me@dowu.xyz </a>.
        </p>
      </div>

      <div v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <h2>
            {{ article.title }}
            <code v-if="!article.completed" class="ml-2">WIP</code>
          </h2>
        </nuxt-link>
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