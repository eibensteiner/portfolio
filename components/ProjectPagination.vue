<template>
  <div>
    <nuxt-link :to="next.path" v-if="next">
      <h5>{{ next.title }}</h5>
      <p>Newer<icon-arrow-left /></p>
    </nuxt-link>
    <nuxt-link
      :to="previous.path"
      v-if="previous"
    >
      <h5>{{ previous.title }}</h5>
      <p>Older<icon-arrow-right /></p>
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