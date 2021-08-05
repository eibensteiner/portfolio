<template>
  <div class="default">
    <Nuxt/>
    <footer class="footer">
      Made with <lib-link>Nuxt.js</lib-link> and
      <lib-link>Tailwind CSS</lib-link>.
    </footer>
  </div>
</template>

<style scoped>
.default {
  @apply w-full flex items-center flex-col py-6 sm:py-32 px-6 sm:px-0;
}

.default > * {
  @apply w-full max-w-xl;
}

.footer {
  @apply leading-7 font-normal text-gray-500 mt-8;
}
</style>