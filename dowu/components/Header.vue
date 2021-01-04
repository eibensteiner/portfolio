<template>
  <header class="header">
    <div class="header-left">
      <h1>{{ heading }}</h1>
    </div>
    <p class="header-right">{{ subheading }}</p>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &-left {
    max-width: 152px;
    width: 100%;
    margin-right: 64px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &-right {
    width: 100%;
    margin: 0;
  }
}

.section-content {
  margin-top: 48px;
}
</style>