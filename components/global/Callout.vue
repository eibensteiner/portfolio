<template>
  <div :class="['callout', 'type-' + type]">
    <h5><icon-cube-transparent :color="'grey-600'" /> {{ title }}</h5>
    <p class="color-600">{{ text }}</p>
  </div>
</template>

<script>
import IconLock from "../icon/IconLock.vue";
export default {
  components: { IconLock },
  props: {
    title: String,
    text: String,
    type: {
        default: 'information',
        type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.callout {
  background: rgba(var(--white), 1);
  border: 1px solid;
  border-radius: 6px;
  @include padding(16px 24px !important);

  &.type {
    &-information {
      background: rgba(var(--white), 1);
      border-color: rgba(var(--grey-200), 1);
    }
  }

  h5 {
    @include flex(flex-start, center, row);

    .icon {
      margin-right: 12px;
    }
  }
}
</style>
