<template>
  <article>
    <nuxt-content :document="project" />
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  transition: "fade",
  head() {
    // Set Meta Tags for this Page
  },
  async asyncData({ $content, params }: { $content: any; params: any }) {
    const project = await $content("projects", params.slug).fetch();

    return { project };
  },
};
</script>