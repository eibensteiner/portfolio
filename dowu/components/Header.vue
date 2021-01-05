<template>
  <header :class="['header', 'variant-' + variant]">
    <div class="header-content">
      <div class="title">
        <h1>{{ title }}</h1>
        <slot name="title" />
      </div>
      <div class="subtitle">
        <p v-html="subtitle"></p>
        <slot name="subtitle" />
      </div>
    </div>
    <slot name="additional" />
  </header>
</template>

<script lang="ts">
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
    variant: {
      type: String,
      default: "first",
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