<template>
  <main>
    <h1>
      I'm Dominik, a coding Designer from Austria, striving for visual clarity
      and simplicity.
    </h1>
    <p>
      I'm <em>Dominik</em>, a coding <em>designer based in Linz, Austria</em>.
    </p>
    <p>
      Currently I’m working as a
      <em>Product & Brand Designer</em> at
      <link-external :href="'https://blockpit.io'">Blockpit</link-external>, supporting
      thousands of Users with their crypto taxes.
    </p>

    <template v-for="article of pinned">
      <hr />
      <article-item :is-pinned="true" :content="article"></article-item>
    </template>

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
    const pinned = await $content(params.slug).where({ pinned: true }).fetch();
    const articles = await $content(params.slug)
      .where({ pinned: { $ne: true } })
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
      pinned,
    };
  },
};
</script>