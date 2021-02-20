<template>
  <header class="header">
    <div class="header-left">
      <h1 class="title">{{ title }}</h1>
      <p v-html="subtitle"></p>
    </div>
    <div class="header-right">
      <template v-if="$route.name === 'index' || $route.name === 'about'">
        <nuxt-link to="/">Work</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </template>
      <template v-if="$route.name != 'index' && $route.name != 'about'">
        <nuxt-link to="/">
          <arrow-left />
          Go Back
        </nuxt-link>
      </template>
    </div>
  </header>
</template>

<script>
import ArrowLeft from "./icons/ArrowLeft.vue";
export default {
  components: { ArrowLeft },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin: 136px 0 64px 0;
  @include flex(space-between, flex-end, row);
  @include padding(0 32px);

  &-left {
    max-width: $nudge * 46;
  }

  &-right {
    @include flex(center, center, row);

    & > * {
      margin-left: $nudge * 3;
      line-height: 24px;
      @include flex(center, center, row);

      &:not(.nuxt-link-exact-active) {
        color: rgba(var(--grey600), 1);
      }

      svg {
        margin-right: 8px;
      }
    }
  }
}
</style>