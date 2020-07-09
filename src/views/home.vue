<template>
  <div class="view">
    <transition appear appear-active-class="fade-enter">
      <lib-header></lib-header>
    </transition>
    <transition appear appear-active-class="fade-enter">
      <lib-list>
        <lib-item :timeframe="{from: '2020', to: 'Current'}" :badge="{text:'Framed', variant: 'purple'}" :text="'Designing & Building the Mother of all Dashboards'">
          <img src="/img/projects/framed.jpg" alt=""/>
        </lib-item>
        <lib-item :timeframe="{from: '2020', to: 'Current'}" :badge="{text:'Blockpit', variant: 'blue'}" :text="'Designing & Building the Blockpit Webapp'">
          <img src="/img/projects/webapp.jpg" alt=""/>
        </lib-item>
        <lib-item :timeframe="{from: '2020', to: 'Current'}" :badge="{text:'Framed', variant: 'purple'}" :text="'Designing & Building the Blockpit Design System'">
          <img src="/img/projects/design.jpg" alt=""/>
        </lib-item>
      </lib-list>
    </transition>
  </div>
</template>

<script>
  import LibHeader from "../components/header";
  import LibList from "../components/list";
  import LibItem from "../components/Item";

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
        border-top-left-radius: get($border-radius, md);
        border-top-right-radius: get($border-radius, md);
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