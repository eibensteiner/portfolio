<template>
  <div class="root">
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.root {
  @include flex(flex-start, center, column);

  & > * {
    width: 100%;
    max-width: 704px;
  }
}
</style>
