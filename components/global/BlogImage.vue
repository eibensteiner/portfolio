<template>
  <figure class="my-10 w-full">
    <div class="rounded w-full overflow-hidden">
      <img
        :src="isLowQuality ? imageSrc() : ''"
        :data-src="imageSrc()"
        :alt="handleAlt()"
        class="image lazyload w-full"
        :class="hasBorder ? 'border' : ''"
      />
    </div>
    <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: String,
    hasBorder: Boolean,
  },

  data() {
    return {
      isLowQuality: this.checkImageQuality(),
    }
  },

  methods: {
    imageSrc() {
      try {
        return require(`~/assets/img/${this.src}`);
      } catch (e) {
        console.log(e);
      }
    },

    checkImageQuality() {
      if (this.src.includes("-low")) {
        return true;
      } else return false;
    },

    handleAlt() {
      if (this.alt) return this.alt;
      else if (!this.alt && this.caption) return this.caption;
      else return "";
    },
  },
};
</script>

<style scoped>
.lazyload {
  @apply blur;
}

.lazyload:not([src]) {
	@apply invisible;
}

.caption {
  @apply mt-6 text-sm text-gray-500;
}
</style>