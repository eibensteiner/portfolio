<template>
  <nuxt-link class="link-block" :to="href">
    <div class="flex items-center">
      <div class="illustration">
        <div class="w-full bg-gray-400"></div>
        <div class="w-2/3 bg-gray-300"></div>
        <div class="w-5/6 bg-gray-200"></div>
      </div>
      <div class="flex flex-col">
        <span class="title"
          >{{title}}</span
        >
        <span class="subtitle">{{subtitle}}</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    href: String,
  }
}
</script>

<style scoped>
.link-block {
  @apply w-full flex;
}

.title {
  @apply leading-7 font-medium text-gray-900 text-sm;
}

.subtitle {
  @apply leading-6 font-normal text-gray-500 text-sm;
}

.link-block:hover .illustration {
  @apply bg-gray-50 transition-colors bg-opacity-50;
}

.link-block:hover .title {
  @apply text-black transition-colors;
}

.illustration {
  @apply w-11 h-14 border rounded-md shadow-sm bg-white p-2 mr-5;
}

.illustration div {
  @apply h-1 rounded-sm mb-1;
}

@media print {
  .link-block {
    @apply hidden;
  }
}
</style>