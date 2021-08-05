<template>
  <nuxt-link :to="'/'" :class="'back-button'">
    <icon-arrow-left />
  </nuxt-link>
</template>

<style scoped>
.back-button {
  @apply rounded-full bg-white border-gray-200 border h-9 w-9 shadow sm:shadow-sm sm:h-7 sm:w-7 flex items-center justify-center fixed sm:absolute left-8 bottom-8 sm:-left-14 sm:bottom-auto hover:bg-gray-100 transition cursor-pointer;
}

@media print {
  .back-button {
    @apply hidden;
  }
}
</style>