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
