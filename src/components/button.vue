<template>
  <button :class="['button', 'size-'+size, 'variant-'+variant]">
    <i v-if="disabled" class="ri-lock-2-fill"></i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "LibButton",
    props: {
      size: {
        default: "lg",
        type: String
      },
      variant: {
        default: 'white',
        type: String
      }
    },
  };
</script>

<style scoped lang="scss">

  .button {
    appearance: none;
    line-height: get($line-height, sm);
    font-weight: get($font-weight, light);
    color: get($color, white);
    border-radius: get($border-radius, sm);
    white-space: nowrap;
    border: 1px solid transparent;
    transition: all .2s;
    @include flex();
  }

  .size {
    &-sm {
      min-height: $size*3;
      font-size: get($font-size, 2);
      @include padding(0 ($size))
    }

    &-lg {
      min-height: $size*5;
      font-size: get($font-size, 3);
      @include padding(0 ($size*2));
    }
  }

  .variant {
    &-white {
      background: transparent;
      border-color: get($color, grey, 200);
    }
  }
</style>