<template>
  <main>
    <h1>
      I'm Dominik, a coding Designer from Austria, striving for visual clarity
      and simplicity.
    </h1>
    <p>I'm Dominik, a coding designer based in Linz, Austria.</p>
    <p>
      Currently I’m working as a Product & Brand Designer at
      <link-inline :href="'https://blockpit.io'" :isInternal="false"
        >Blockpit</link-inline
      >, supporting thousands of Users with their crypto taxes.
    </p>

    <hr />
    <article-item :content="pinned[0]" :isPinned="true"></article-item>

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
    const pinned = await $content(params.slug)
      .where({ slug: { $eq: "about" } })
      .fetch();
    const articles = await $content(params.slug)
      .where({ slug: { $ne: "about" } })
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
      pinned,
    };
  },
};
</script>