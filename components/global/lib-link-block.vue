<template>
  <nuxt-link class="link-block" :to="href">
    <img
      :src="'https://cdn.pocket-lint.com/r/s/970x/assets/images/158682-smartwatches-review-apple-watch-series-7-all-about-the-screen-image2-ggnlijys37-jpg.webp'"
      class="h-28 w-3/12 bg-slate-dark-4 object-cover object-center"
    />
    <div class="flex w-9/12 flex-col items-start justify-center px-7">
      <h4 class="inline-flex items-center">{{ title }}<icon-link :is-button="true" class="ml-3" /></h4>
      <p class="mt-2 mb-0">{{ subtitle }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    href: String,
  },
};
</script>

<style lang="scss" scoped>
.link-block {
  @apply flex w-full border bg-slate-dark-2 rounded-lg overflow-hidden;
}

p {
  @apply whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full;
}

a {
  @apply transition-colors;
}

img {
  @apply transition-opacity border-r;
}

.link-block:hover {
  a {
    @apply text-white;
  }

  img {
    @apply opacity-80;
  }
}

@media print {
  .link-block {
    @apply hidden;
  }
}
</style>