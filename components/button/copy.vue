<template>
  <div @click="copy()">
    <icon-duplicate :is-button="true" ref="copy"></icon-duplicate>
    <icon-check
      :is-button="true"
      ref="check"
      class="!hidden"
    ></icon-check>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      dataValue: this.value,
    };
  },
  methods: {
    copy() {
      const checkIcon = this.$refs.check.$el;
      const copyIcon = this.$refs.copy.$el;

      navigator.clipboard.writeText(this.dataValue);
      checkIcon.classList.remove("!hidden");
      copyIcon.classList.add("!hidden");

      setTimeout(() => {
        checkIcon.classList.add("!hidden");
        copyIcon.classList.remove("!hidden");
      }, 2000);
    },
  },
};
</script>