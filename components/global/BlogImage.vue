<template>
  <figure>
    <img :src="imageSrc()" :alt="alt" :class="'image'" />
    <figcaption v-if="caption">{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: String,
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
  width: 100%;
  border-radius: 4px;
}
</style>
