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

    <template v-for="article of pinned">
      <hr />
      <lib-article :is-pinned="true" :content="article"></lib-article>
    </template>

    <template v-for="article of articles">
      <hr />
      <lib-article :content="article"></lib-article>
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