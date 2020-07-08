<template>
  <div class="app">
    <lib-navigation></lib-navigation>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import LibNavigation from "./components/navigation";

export default {
  components: {LibNavigation}
};
</script>
