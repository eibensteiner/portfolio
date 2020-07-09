<template>
  <div class="item">
    <div class="item-header">
      <div>
        <lib-badge :text="'Framed'" :variant="'purple'"></lib-badge>
        <span>2018</span>
        <i class="ri-arrow-right-line"></i>
        <span>2010</span>
      </div>
      <h2>Designing & Building the Mother of all Dashboards</h2>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import LibBadge from "./badge";
export default {
  name: "LibItem",
  components: {LibBadge},
};
</script>

<style scoped lang="scss">
  .item {
    width: 100%;
    height: 560px;
    border-radius: get($border-radius, md);
    background: get($color, grey, 100);
    border: 1px solid get($color, grey, 200);
    margin-top: 40px;
    box-sizing: border-box;
    transition: all .3s;
    @include flex(space-between, center, column);

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
      border-color: get($color, grey, 300);
    }

    &-header {
      margin-top: 80px;
      @include flex(center, center, column);

      & > div {
        @include flex();

        .badge {
          margin-right: 16px;
        }

        i {
          color: get($color, grey, 300);
          margin: 0 8px;
        }

        span {
          color: get($color, grey, 300);

          &.current {
            color: #fff;
          }
        }
      }

      h2 {
        margin-top: 16px;
        font-size: get($font-size, 7);
        font-weight: get($font-weight, bold);
      }

    }
  }
</style>
