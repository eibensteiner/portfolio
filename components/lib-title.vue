<template>
  <h1 class="title">
    <lib-back-button v-if="hasBackButton"></lib-back-button>
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    hasBackButton: Boolean,
  },
};
</script>

<style scoped>
.title {
    @apply relative inline-flex items-center;
}
</style>