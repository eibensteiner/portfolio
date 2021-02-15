<template>
  <header class="header">
    <div class="header-left">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <div class="header-right">
      <template v-if="!isNested">
        <nuxt-link to="/">Work</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </template>
      <template v-if="isNested">
        <nuxt-link to="/about">Go Back</nuxt-link>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    isNested: false,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin: 136px 0 80px 0;
  @include flex(space-between, flex-end, row);
  @include padding(0 32px);

  &-left {
    max-width: $nudge * 46;
  }

  &-right {
    & > * {
      margin-left: $nudge * 3;
      font-size: 18px;
      font-weight: 600;
      line-height: 24px;

      &:not(.nuxt-link-exact-active) {
        color: rgba(var(--grey600), 1);
      }
    }
  }
}
</style>