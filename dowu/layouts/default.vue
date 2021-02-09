<template>
  <div class="root">
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.root {
  margin-top: $nudge * 16;
  @include flex(center, center, column);

  & > * {
    width: 100%;
    max-width: $nudge * 106;
  }
}
</style>
