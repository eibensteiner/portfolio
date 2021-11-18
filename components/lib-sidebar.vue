<template>
  <aside class="sidebar">
    <div class="flex items-center mb-8">
      <img src="@/assets/img/about/me.jpg" class="w-7 h-7 rounded-full mr-3" />
      <h2 class="m-0">Dominik Wurm</h2>
    </div>
    <button class="search">
      <div class="flex items-center">
        <icon-search :variant="'first'" class="mr-2"></icon-search>
        <span>Search</span>
      </div>
      <lib-badge></lib-badge>
    </button>
    <nuxt-link :to="'/'">About Me</nuxt-link>
    <span class="block text-sm font-semibold leading-7 mt-6 mb-2"
      >Projects</span
    >
    <nuxt-link :to="'/command'">Command</nuxt-link>
    <span class="block text-sm font-semibold leading-7 mt-6 mb-2">Contact</span>
    <nuxt-link :to="'/twitter'">Twitter</nuxt-link>
    <nuxt-link :to="'/github'">GitHub</nuxt-link>
  </aside>
</template>

<style scoped>
.sidebar {
  @apply w-64 ml-16 pl-16 h-screen border-l sticky top-0 py-28;
}

a {
  @apply h-9 rounded-lg w-full flex items-center px-3 -ml-3 mt-1 text-gray-600 font-medium transition-colors hover:text-black;
}

.nuxt-link-active {
  @apply bg-gray-100 text-gray-900;
}

.search {
  @apply h-9 rounded-lg w-full flex justify-between pl-3 pr-1.5 -ml-3 mt-8 mb-6;
}
</style>