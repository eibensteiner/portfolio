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
    border-radius: get($border-radius, sm);
    white-space: nowrap;
    color: get($color, white);
    font-size: get($font-size, 2);
    font-weight: get($font-weight, light);
    @include padding($size/2 $size);
    @include flex();
  }

  .variant {
    &-purple {
      background: get($color, purple);
    }

    &-blue {
      background: get($color, blue);
    }
  }
</style>
