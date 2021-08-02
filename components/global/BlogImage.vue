<template>
  <figure class="my-10">
    <img :src="imageSrc()" :alt="alt" class="image" :class="hasBorder ? 'border' : ''" />
    <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: String,
    hasBorder: String,
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

<style scoped>
.image {
  @apply rounded;
}

.caption {
  @apply mt-6 text-sm text-gray-500;
}
</style>