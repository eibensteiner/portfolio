<template>
  <img :src="imageSrc()" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
  },
  methods: {
    imageSrc () {
      try {
        return require(`~/assets/img/${this.src}`);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
