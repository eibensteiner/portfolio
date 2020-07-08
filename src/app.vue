<template>
  <div class="app">
    <transition appear appear-active-class="fade-enter">
      <Header>
        Servus, I’m Dominik, a Coding Designer from Austria.
        <a href="mailto:me@dowu.xyz?subject=Request">📮 Say Hi</a>, or follow my
        exciting journey on
        <a href="https://twitter.com/wurmdo" target="_blank">🐦 Twitter</a> and
        <a href="https://dribbble.com/Dowu" target="_blank">🏀 Dribbble</a>.
        <hr />
      </Header>
    </transition>
    <transition appear appear-active-class="fade-enter">
      <List>
        <Item :year="2020">
          <h2>Building Framed</h2>
        </Item>
        <Item :year="2018">
          <h2>
            Product Designer at
            <a href="https://blockpit.io" target="_blank">📈 Blockpit</a>
          </h2>
        </Item>
        <Item :year="2018">
          <h2>Graduated at UAS Upper Austria.</h2>
        </Item>
        <Item :year="2017">
          <h2>
            UI/UX Developer at
            <a href="https://storyclash.com" target="_blank">⚡️ Storyclash</a>
          </h2>
        </Item>
      </List>
    </transition>
  </div>
</template>

<style lang="scss">
.app {
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
<script>
import Header from "./components/header/header";
import List from "./components/list/List";
import Item from "./components/item/Item";

export default {
  components: { Item, List, Header }
};
</script>
