<template>
  <button class="button" @click="$emit('onclick')" @mouseover="$emit('onhover')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.button {
  background-color: var(--darkgrey);
  color: var(--white);
  border: 1px solid var(--midgrey);
  border-radius: 4px;
  box-sizing: border-box;
  line-height: 36px;
  height: 40px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
}
</style>