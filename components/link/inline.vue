<template>
  <nuxt-link
    v-if="isInternal"
    class="link-inline"
    :class="['variant-' + variant, isDisabled ? 'disabled' : '']"
    :to="href"
  >
    <slot></slot>
  </nuxt-link>
  <a
    v-else
    class="link-inline"
    :class="['variant-' + variant, isDisabled ? 'disabled' : '']"
    :href="isEmail ? 'mailto:' + href : href"
    target="_blank"
    rel="noopener"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    variant: {
      default: "first",
      type: String,
    },
    href: String,
    isDisabled: Boolean,
    isInternal: {
      default: true,
      type: Boolean,
    },
    isEmail: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.link-inline {
  @apply transition-all cursor-pointer inline-flex items-center;
}

.variant {
  &-first {
    @apply text-gray-900 hover:text-black font-medium underline decoration-gray-300 underline-offset-2 hover:decoration-gray-300;
  }

  &-second {
    @apply text-gray-600 hover:text-gray-700 font-normal;
  }
}
</style>