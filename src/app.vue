<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "styles/main";

  .app {
    width: 100%;
    padding-top: $size*15;
    @include flex();
    @include viewport(sm) {
      padding-top: $size*5;
    }
  }
</style>
<script>

export default {
};
</script>
