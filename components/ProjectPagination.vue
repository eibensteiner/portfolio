<template>
  <div class="project-pagination card">
    <nuxt-link :to="next.path" v-if="next" class="project-pagination-element">
      <h5 class="title">{{ next.title }}</h5>
      <p class="subtitle">Newer<icon-arrow-left /></p>
    </nuxt-link>
    <nuxt-link
      :to="previous.path"
      v-if="previous"
      class="project-pagination-element"
    >
      <h5 class="title condensed">{{ previous.title }}</h5>
      <p class="subtitle">Older<icon-arrow-right /></p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    previous: Object,
    next: Object,
  },
};
</script>