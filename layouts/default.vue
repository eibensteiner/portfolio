<template>
  <div class="default">
    <Nuxt/>
    <lib-command></lib-command>
  </div>
</template>

<style scoped>
.default {
  @apply w-full flex items-center flex-col py-6 sm:py-36 px-6 sm:px-0;
}

.default > * {
  @apply w-full max-w-2xl;
}
</style>
