<template>
  <div>
    <h1 class="title">
      <lib-back-button v-if="hasBackButton"></lib-back-button>
      <slot></slot>
    </h1>
  </div>
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
  @apply sm:relative inline-flex items-center;
}
</style>