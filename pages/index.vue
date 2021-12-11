<template>
  <main>
    <h1>
      I'm Dominik, a coding Designer from Austria, striving for visual clarity
      and simplicity.
    </h1>
    <p>
      I'm <link-inline :href="'/about'">Dominik</link-inline>, a coding <em>designer based in Linz, Austria</em>.
    </p>
    <p>
      Currently I’m working as a
      <em>Product & Brand Designer</em> at
      <link-inline :href="'https://blockpit.io'" :isInternal="false">Blockpit</link-inline>, supporting
      thousands of Users with their crypto taxes.
    </p>

    <template v-for="article of articles">
      <hr />
      <article-item :content="article"></article-item>
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