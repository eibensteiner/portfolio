<template>
  <nav class="navigation">
    <NuxtLink to="/">Projects</NuxtLink>
    <NuxtLink to="/thoughts">Thoughts</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  margin: 48px 0 96px 0;

  & > *:not(:first-child) {
    margin-left: 24px;
  }
  a {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    &:not(.nuxt-link-exact-active) {
      color: var(--lightgrey);
    }
  }
}
</style>