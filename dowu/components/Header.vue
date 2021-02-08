<template>
  <header :class="['header']">
    <div class="header-content">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <slot name="additional" />
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  @include flex(space-between, initial, initial);

  &.variant-first {
    & > .header-content {
      @include flex(space-between, initial, initial);

      .title {
        max-width: 160px;
        width: 100%;
        margin-right: 64px;
        @include flex(flex-start, flex-start, column);

        & > *:not(:last-child) {
          margin-bottom: 32px;
        }
      }

      .subtitle p {
        margin: 0;
      }
    }
  }

  &.variant-second {
    margin-bottom: 48px;
    @include flex(space-between, flex-end, initial);

    .title {
      @include flex(initial, center, initial);

      & > *:not(:last-child) {
        margin-right: 16px;
      }
    }

    .subtitle {
      max-width: 440px;
      width: 100%;
    }
  }
}
</style>