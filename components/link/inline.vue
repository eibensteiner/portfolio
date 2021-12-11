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
    :href="href"
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
  },
};
</script>

<style lang="scss" scoped>
.link-inline {
  @apply font-medium transition-all cursor-pointer inline-flex items-center;
}

.variant {
  &-first {
    @apply text-white hover:text-white underline decoration-slate-dark-7 underline-offset-2 hover:decoration-slate-dark-8;
  }

  &-second {
    @apply text-slate-dark-11 hover:text-slate-dark-12;
  }
}

.disabled {
  @apply text-slate-dark-8 pointer-events-none;
}
</style>