<template>
  <nuxt-link class="link-block" :to="href">
    <img v-if="image" :src="image" :alt="title" />
    <div class="px-7" :class="image ? 'w-9/12' : 'w-full'">
      <h4 class="title">{{ title }}<icon-link :is-button="true" class="ml-3" /></h4>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    href: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
.link-block {
  @apply flex items-center w-full h-28 border border-slate-dark-3 bg-slate-dark-2 rounded-lg overflow-hidden transition-colors;

  &:hover {
    img {
      @apply opacity-80;
    }
  }
}

img {
  @apply h-full w-3/12 bg-slate-dark-4 object-cover object-center transition-opacity border-r border-slate-dark-3;
}

.title {
  @apply inline-flex items-center;
}

.subtitle {
  @apply whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full mt-2 mb-0;
}

@media print {
  .link-block {
    @apply hidden;
  }
}
</style>