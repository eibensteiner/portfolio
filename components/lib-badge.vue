<template>
  <span class="badge" :class="variant">
      <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    variant: {
      default: "pill",
      type: String,
    },
  },
};
</script>

<style scoped>
.badge {
  @apply bg-gray-200 text-gray-600 text-sm h-6  inline-flex items-center font-normal select-none;
}

.badge.pill {
    @apply px-2 rounded-xl;
}

.badge.box {
    @apply px-1.5 rounded-md;
}
</style>