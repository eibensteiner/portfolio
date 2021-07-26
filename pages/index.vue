<template>
  <main>
    <h1>I'm Dominik, a coding Designer from Austria, striving for visual clarity and simplicity.</h1>
    <div>
      <div>
        <p>
          Currently I’m working as a <strong>Product & Brand Designer</strong> at
          <a> Blockpit </a>, supporting thousands of Users with their crypto
          taxes. Previously I worked as a <strong>UX Engineer</strong> at <a> Storyclash </a>.
        </p>
        <p>
          If you want to follow my journey elsewhere, you can do so on
          <a> Twitter </a>, <a> LinkedIn </a>,
          <a> GitHub </a>
          or
          <a> Dribbble </a>. You can also reach out to me by <strong>sending a message</strong>
          to
          <a> me@dowu.xyz </a>
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