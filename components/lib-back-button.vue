<template>
  <nuxt-link
    :to="'/'"
    :class="'back-button'"
  >
    <icon-arrow-left />
  </nuxt-link>
</template>

<style scoped>
.back-button {
  @apply rounded-full bg-gray-50 border-gray-200 border h-7 w-7 flex items-center justify-center absolute -left-14 hover:bg-gray-100 transition cursor-pointer;
}

@media print {
  .back-button {
    @apply hidden;
  }
}
</style>