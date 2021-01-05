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
  display: flex;
  justify-content: space-between;

  &.variant-first {
    align-items: flex-start;

    & > .header-content {
      display: flex;
      justify-content: space-between;

      .title {
        max-width: 152px;
        width: 100%;
        margin-right: 64px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

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
    align-items: flex-end;
    margin-bottom: 48px;

    .title {
      display: flex;
      align-items: center;

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