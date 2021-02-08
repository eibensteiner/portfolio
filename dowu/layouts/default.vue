<template>
  <div class="root">
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    width: 100%;
    max-width: $nudge * 94;
  }
}
</style>
