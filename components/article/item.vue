<template>
  <section class="article relative">
    <nuxt-link :to="{ name: 'slug', params: { slug: content.slug } }">
      <h1 class="mt-0 mb-3 relative">
        {{ content.title }}
        <base-badge :label="'Pinned'" class="ml-3" v-if="isPinned" />
        <div class="overlay">
          <icon-arrow-right
            :variant="'first'"
            :is-button="true"
          ></icon-arrow-right>
        </div>
      </h1>
    </nuxt-link>
    <nuxt-content :document="content" />
  </section>
</template>

<script>
export default {
  props: {
    isPinned: Boolean,
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
.article h1 .overlay {
  @apply absolute right-0 bottom-0 top-0 bg-gradient-to-l from-slate-dark-1 rounded-lg invisible opacity-0 transition-all flex items-center justify-end w-full;
}

.article h1:hover .overlay {
  @apply opacity-100 visible;
}

.article h1 {
  @apply text-xl text-white font-semibold mb-4 font-serif inline-flex items-center;
}

.article h2 {
  @apply text-base text-white font-semibold w-full mb-2 mt-6 font-serif;
}
</style>