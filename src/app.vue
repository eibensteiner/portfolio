<template>
  <div class="app">
    <lib-navigation></lib-navigation>
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
import LibNavigation from "./components/navigation";

export default {
  components: {LibNavigation}
};
</script>
