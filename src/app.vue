<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "styles/main";

  .app {
    width: 100%;
    padding-top: 160px;
    @include flex();
  }
</style>
<script>

export default {
};
</script>
