<template>
  <article>
    <nuxt-content :document="thought" />
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
    const thought = await $content('thoughts', params.slug).fetch();

    return { thought }
  },
};
</script>