<template>
  <div class="item">
    <div class="item-left">
      <lib-badge :text="this.year"></lib-badge>
    </div>
    <div class="item-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LibBadge from "../badge/Badge";
export default {
  name: "LibItem",
  components: {LibBadge  },
  props: {
    year: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "item.scss";
</style>
