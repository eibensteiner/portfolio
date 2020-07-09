<template>
  <div :class="['badge', 'variant-'+variant]">
    {{ this.text }}
  </div>
</template>

<script>
export default {
  name: "LibBadge",
  props: {
    text: {
      required: true
    },
    variant: {
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  .badge {
    appearance: none;
    border-radius: get($radius, 1);
    white-space: nowrap;
    height: 20px;
    color: $white;
    font-size: get($font, size, 1);
    font-weight: get($font, weight, md);
    @include padding(0 $size/2);
    @include flex();
  }

  .variant {
    &-purple {
      background: $purple;
    }
  }
</style>
