<template>
  <article>
    <nuxt-content :document="project" />
  </article>
</template>

<script>
export default {
  head() {
    // Set Meta Tags for this Page
  },
  /*async asyncData({ $content, params }: { $content: any; params: any }) {
    const project = await $content("projects", params.slug).fetch();

    return { project };
  },*/
};
</script>