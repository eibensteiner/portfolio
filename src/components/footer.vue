<template>
  <footer :class="'footer'">
    <a href="#" :class="'text-grey-300'">Twitter</a>
    <a href="#" :class="'text-grey-300'">Dribbble</a>
    <a href="#" :class="'text-grey-300'">GitHub</a>
  </footer>
</template>

<script>
  export default {
    name: "LibFooter"
  }
</script>

<style scoped lang="scss">
  .footer {
    margin: ($size*5) 0 ($size*13) 0;
    @include flex();
    @include viewport(sm) {
      margin: ($size*5) 0 ($size*5) 0;
      @include flex(center, center, column);
    }
  }

  a {
    font-size: get($font-size, 3);
    margin: $size ($size*3);
  }
</style>