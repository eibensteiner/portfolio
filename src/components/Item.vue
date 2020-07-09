<template>
  <div class="item">
    <i :class="['ri-link-m', 'text-grey-300']"></i>
    <div class="item-header">
      <div>
        <lib-badge :text="badge.text" :variant="badge.variant"></lib-badge>
        <div :class="'timeframe'">
          <span :class="'text-grey-300'">{{timeframe.from}}</span>
          <i :class="['ri-arrow-right-line', 'text-grey-300']"></i>
          <span :class="[timeframe.to === 'Current' ? 'text-white' : 'text-grey-300']">{{timeframe.to}}</span>
        </div>
      </div>
      <h2>{{text}}</h2>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import LibBadge from "./badge";

  export default {
    name: "LibItem",
    components: {LibBadge},
    props: {
      timeframe: {
        from: String,
        to: String
      },
      badge: {
        text: String,
        variant: String
      },
      text: String
    }
  };
</script>

<style scoped lang="scss">
  .item {
    width: 100%;
    height: 504px;
    border-radius: get($border-radius, md);
    background: get($color, grey, 100);
    border: 1px solid get($color, grey, 200);
    margin-top: 40px;
    box-sizing: border-box;
    transition: all .3s;
    position: relative;
    @include flex(space-between, center, column);
    @include viewport(sm) {
      height: auto;
    }

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
      border-color: get($color, grey, 300);

      & > i {
        opacity: 1;
        visibility: visible;
      }
    }

    & > i {
      position: absolute;
      top: 40px;
      right: 40px;
      opacity: 0;
      visibility: hidden;
      transition: all .2s;
    }

    &-header {
      margin-top: $size*5;
      @include padding($size * 3);
      @include flex(center, center, column);
      @include viewport(sm) {
        margin-top: $size*2;
      }

      & > div {
        @include flex();
        @include viewport(sm) {
          @include flex(center, center, column);
        }

        .timeframe {
          @include flex();
          @include viewport(sm) {
            margin-top: $size*2;
          }
        }

        .badge {
          margin-right: 16px;
          @include viewport(sm) {
            margin: 0;
          }
        }

        i {
          margin: 0 8px;
          font-size: get($font-size, 3);
        }

        span {
          font-size: get($font-size, 3);
        }
      }

      h2 {
        margin-top: 16px;
        font-size: get($font-size, 7);
        font-weight: get($font-weight, bold);
        line-height: get($line-height, lg);
        max-width: 632px;
        text-align: center;
      }
    }
  }
</style>
