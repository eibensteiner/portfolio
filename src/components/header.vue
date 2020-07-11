<template>
  <header class="header">
    <lib-avatar></lib-avatar>
    <div>
      <h1>
        Because we are all humans
      </h1>
      <h2>I’m Dominik, a Coding Designer from Austria and a human like you. I love minimal & functional Interfaces</h2>
    </div>
  </header>
</template>

<script>
  import LibAvatar from "./avatar";

  export default {
    name: "LibHeader",
    components: {LibAvatar}
  };
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: $size*13;
    @include flex(center, center, column);
    @include viewport(sm) {
      margin-bottom: $size*8;
    }

    div {
      margin-top: $size* 5;
      text-align: center;
      @include flex(center, center, column);
      @include viewport(sm) {
        margin-top: $size*8;
      }
    }

    h1 {
      font-size: get($font-size, 11);
      @include viewport(sm) {
        font-size: get($font-size, 10);
      }
    }

    h2 {
      font-size: get($font-size, 5);
      color: get($color, grey, 300);
      margin-top: $size*2;
      font-weight: get($font-weight, light);
      max-width: $size*79;
      line-height: get($line-height, lg);
      @include viewport(sm) {
        font-size: get($font-size, 4);
      }
    }
  }
</style>
