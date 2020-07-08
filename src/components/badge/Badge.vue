<template>
  <div class="badge">
    {{ this.text }}
  </div>
</template>

<script>
export default {
  name: "LibBadge",
  props: {
    text: {
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "badge";
</style>
