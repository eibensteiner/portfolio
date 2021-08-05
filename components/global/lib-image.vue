<template>
  <figure class="my-10 w-full">
    <div class="rounded w-full overflow-hidden">
      <img
        :src="require(`~/assets/img/${this.lowSrc}`)"
        :data-src="require(`~/assets/img/${this.highSrc}`)"
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
    lowSrc: String,
    highSrc: String,
    alt: String,
    caption: String,
    hasBorder: Boolean,
  },

  methods: {
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