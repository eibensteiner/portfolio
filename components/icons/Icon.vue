<script>
export default {
  props: {
    size: {
      type: String,
      default: "sm",
    },
    color: {
      type: String,
      default: "black",
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  transition: color 0.2s;

  &.size {
    &-sm {
      width: 16px;
      height: 16px;
    }

    &-lg {
      width: 20px;
      height: 20px;
    }
  }

  &.disabled {
    color: rgba(var(--grey-200), 1);
  }
}
</style>