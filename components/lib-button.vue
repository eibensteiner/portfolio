<template>
  <button class="button" :class="variant">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      default: "first",
      type: String,
    },
  },
};
</script>

<style scoped>
button {
  @apply h-11 px-5 text-lg rounded-3xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors;
}
</style>