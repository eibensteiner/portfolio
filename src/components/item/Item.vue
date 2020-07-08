<template>
  <div class="item">
    <div class="item-left">
      <Badge :text="this.year"></Badge>
    </div>
    <div class="item-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Badge from "../badge/Badge";
export default {
  name: "LibItem",
  components: { Badge },
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
