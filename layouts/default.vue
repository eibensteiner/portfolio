<template>
  <div class="default">
    <Nuxt />
    <!--<lib-command></lib-command>-->
    <hr />
    <lib-footer/>
  </div>
</template>

<style lang="scss" scoped>
.default {
  @apply w-full flex flex-col items-center justify-center px-6 py-28 sm:px-0;

  & > * {
    @apply w-full max-w-xl;
  }
}
</style>
