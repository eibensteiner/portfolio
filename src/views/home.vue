<template>
  <div class="view">
    <transition appear appear-active-class="fade-enter">
      <lib-header></lib-header>
    </transition>
    <transition appear appear-active-class="fade-enter">
      <lib-list>
        <lib-item :timeframe="{from: '2020', to: 'Current'}"
                  :heading="'Framed Design & Frontend'"
                  :text="'With Framed you are able to share slim KPI-Dashboards with the most important Startup KPIs to anybody'">
          <img src="/img/projects/framed.png" alt=""/>
        </lib-item>
        <lib-item :timeframe="{from: '2019', to: '2020'}"
                  :heading="'Blockpit Webapp Design & partially Frontend'"
                  :text="'We built a whole new Interface for the Blockpit Webapp. It is now way easier to do your crypto tax calculation'"
                  :href="'https://app.blockpit.io/dashboard'">
          <img src="/img/projects/blockpit.png" alt=""/>
        </lib-item>
      </lib-list>
    </transition>
    <transition appear appear-active-class="fade-enter">
      <lib-footer></lib-footer>
    </transition>
  </div>
</template>

<script>
  import LibHeader from "../components/header";
  import LibList from "../components/list";
  import LibItem from "../components/Item";
  import LibFooter from "../components/footer";

  export default {
    name: "ViewHome",
    components: {LibFooter, LibItem, LibList, LibHeader}
  }
</script>

<style scoped lang="scss">
  .view {
    max-width: 864px;
    width: 100%;
    @include padding($size * 3);
    @include viewport(sm) {
      hyphens: auto;
      max-width: none;
    }

    .fade-enter {
      animation: go 0.7s;
    }

    .item {
      img {
        height: 150%;
        border-radius: get($border-radius, sm);
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