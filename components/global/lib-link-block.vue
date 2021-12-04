<template>
  <nuxt-link class="link-block" :to="href">
    <img
      :src="'https://cdn.pocket-lint.com/r/s/970x/assets/images/158682-smartwatches-review-apple-watch-series-7-all-about-the-screen-image2-ggnlijys37-jpg.webp'"
      class="h-32 w-32 bg-slate-dark-4 object-cover object-center"
    />
    <div class="flex flex-col items-start justify-center px-7">
      <h4>{{ title }}</h4>
      <p>{{ subtitle }}</p>
      <a :href="href" class="flex items-center text-slate-dark-12"
        ><icon-link :is-button="true" class="mr-3" />{{ prettifyURL(href) }}</a
      >
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
  methods: {
    prettifyURL(href) {
      let regex = /\/\/([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g;
      return regex.exec(href)[1];
    }
  }
};
</script>

<style lang="scss" scoped>
.link-block {
  @apply flex w-full border bg-slate-dark-2 rounded-lg overflow-hidden;
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