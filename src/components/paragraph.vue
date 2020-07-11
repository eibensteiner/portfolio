<template>
  <p :class="'paragraph'">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    name: "LibParagraph",
  }
</script>

<style scoped lang="scss">
  .paragraph {
    color: get($color, grey, 300);
    line-height: get($line-height, lg);
    font-size: get($font-size, 3);
  }
</style>