<template>
  <img src="/img/me.jpg" alt="Dominik" />
</template>

<script>
  export default {
    name: "LibAvatar"
  }
</script>

<style scoped lang="scss">
  img {
    max-width: $size*12;
    border-radius: get($border-radius, lg);
    @include viewport(sm) {
      margin-bottom: $size*8;
    }
  }
</style>