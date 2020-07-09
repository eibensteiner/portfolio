<template>
  <div class="view">
    <transition appear appear-active-class="fade-enter">
      <lib-header></lib-header>
    </transition>
    <transition appear appear-active-class="fade-enter">
      <lib-list>
        <lib-item>
          <img src="/img/projects/design.jpg" alt=""/>
        </lib-item>
        <lib-item>
          <img src="/img/projects/design.jpg" alt=""/>
        </lib-item>
        <lib-item>
          <img src="/img/projects/design.jpg" alt=""/>
        </lib-item>
        <lib-item>
          <img src="/img/projects/design.jpg" alt=""/>
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
    max-width: 864px;
    width: 100%;

    @include viewport(sm) {
      hyphens: auto;
      @include padding($size * 4);
      max-width: none;
    }

    .fade-enter {
      animation: go 0.7s;
    }

    .item {
      img {
        width: 100%;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        max-width: 632px
      }
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