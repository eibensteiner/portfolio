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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 104px;

    div {
      margin-top: $size* 5;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    h1 {
      font-size: get($font-size, 11);
    }

    h2 {
      font-size: get($font-size, 5);
      color: get($color, grey, 300);
      margin-top: 16px;
      font-weight: get($font-weight, light);
      max-width: 632px;
      line-height: 1.8;
    }
  }
</style>
