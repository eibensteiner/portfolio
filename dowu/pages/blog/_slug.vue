<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  transition: 'fade',
  head() {
    // Set Meta Tags for this Page
  },
  async asyncData({ $content , params } : {$content: any, params: any}) {
    const article = await $content('articles', params.slug).fetch()

      return { article }
  },
};
</script>