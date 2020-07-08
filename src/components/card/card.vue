<template>
  <div :class="'card'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LibCard"
};
</script>

<style scoped lang="scss">
@import "card";
</style>
