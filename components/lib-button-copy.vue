<template>
    <icon-duplicate :is-button="true" @click="copy()" ref="copy"/></a>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data(){
      return {
          dataValue: this.value,
      }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.dataValue);
      this.$refs.copy.innerText = "Copied";
      setTimeout(() => {
        this.$refs.copy.innerText = "Copy";
      }, 2000);
    },
  },
};
</script>