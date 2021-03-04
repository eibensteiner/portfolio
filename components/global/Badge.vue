<template>
  <span class="badge">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  user-select: none;
  white-space: nowrap;
  min-width: 24px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
  margin: 0 2px;
  text-transform: capitalize;
  border: 1px solid rgba(var(--grey-300), 1);
  color: rgba(var(--black), 1);
  background-color: rgba(var(--white), 1);
  box-shadow: 0 1px 0 0 rgba(var(--grey-300), 0.3);
}
</style>