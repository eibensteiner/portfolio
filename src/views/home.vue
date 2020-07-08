<template>
  <div class="view">
    <transition appear appear-active-class="fade-enter">
      <lib-header>
        Servus, I’m Dominik, a Coding Designer from Austria.
        <a href="mailto:me@dowu.xyz?subject=Request">📮 Say Hi</a>, or follow my
        exciting journey on
        <a href="https://twitter.com/wurmdo" target="_blank">🐦 Twitter</a> and
        <a href="https://dribbble.com/Dowu" target="_blank">🏀 Dribbble</a>.
        <hr />
      </lib-header>
    </transition>
    <transition appear appear-active-class="fade-enter">
      <lib-list>
        <lib-item :year="2020">
          <h2>Building Framed</h2>
        </lib-item>
        <lib-item :year="2018">
          <h2>
            Product Designer at
            <a href="https://blockpit.io" target="_blank">📈 Blockpit</a>
          </h2>
        </lib-item>
        <lib-item :year="2018">
          <h2>Graduated at UAS Upper Austria.</h2>
        </lib-item>
        <lib-item :year="2017">
          <h2>
            UI/UX Developer at
            <a href="https://storyclash.com" target="_blank">⚡️ Storyclash</a>
          </h2>
        </lib-item>
      </lib-list>
    </transition>
  </div>
</template>

<script>
  import LibHeader from "../components/header/header";
  import LibList from "../components/list/List";
  import LibItem from "../components/item/Item";

  export default {
    name: "ViewHome",
    components: {LibItem, LibList, LibHeader}
  }
</script>

<style scoped lang="scss">
  .view {
    max-width: 540px;
    width: 100%;

    @include viewport(sm) {
      hyphens: auto;
      @include padding($size * 4);
      max-width: none;
    }

    & > * {
      margin: ($size * 7) 0 0 0;
    }

    .fade-enter {
      animation: go 0.7s;
    }

    @keyframes go {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
</style>