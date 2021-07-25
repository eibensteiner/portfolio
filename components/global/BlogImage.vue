<template>
  <figure>
    <img
      :srcset="imageSrc()"
      :alt="alt"
      :class="'image'"
      :data-zoomable="this.zoomable"
    />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: String,
    zoomable: Boolean,
  },
  methods: {
    imageSrc() {
      try {
        return require(`~/assets/img/${this.src}`);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .image {
    @apply border rounded;
  }
</style>