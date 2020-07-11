<template>
  <a :class="['item', isReversed ? 'reversed' : '', href ? 'link' : '']" :href="href" target="_blank">
    <div class="item-left">
      <div class="item-header">
        <div :class="'timeframe'">
          <span :class="'text-grey-300'">{{timeframe.from}}</span>
          <i :class="['ri-arrow-right-line', 'text-grey-300']"></i>
          <span :class="[timeframe.to === 'Current' ? 'text-white' : 'text-grey-300']">{{timeframe.to}}</span>
        </div>
        <h2>{{heading}}</h2>
        <lib-paragraph>{{text}}</lib-paragraph>
      </div>
      <div v-if="href" class="item-footer">
        <lib-button :size="'lg'" :variant="'white'">
          View Result
        </lib-button>
      </div>
    </div>
    <div class="item-right">
      <slot></slot>
    </div>
  </a>
</template>

<script>
  import LibParagraph from "./paragraph";
  import LibButton from "./button";

  export default {
    name: "LibItem",
    components: {LibButton, LibParagraph},
    props: {
      timeframe: {
        from: String,
        to: String
      },
      heading: String,
      text: String,
      href: String,
      isReversed : {
        default: false,
        type: Boolean
      }
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
    overflow: hidden;
    @include flex(space-between, center, row);
    @include viewport(sm) {
      height: auto;
    }

    &.reversed {
      @include flex(space-between, center, row-reverse);
    }

    &:first-child {
      margin-top: 0;
    }

    &.link {
      &:hover {
        transform: translateY(-5px);
        cursor: pointer;
        border-color: transparentize(get($color, grey, 300), .5);

        .button {
          border-color: transparentize(get($color, grey, 300), .5);
        }
      }
    }

    &-left {
      height: 100%;
      @include padding(56px);
      @include flex(space-between, flex-start, column);
      @include viewport(sm) {
        @include padding(32px);
      }
    }

    &-right {
      height: calc(100% - 56px);
      margin-top: 56px;
      @include viewport(sm) {
        display: none;
      }
    }

    &-header {
      @include flex(center, flex-start, column);

      h2 {
        font-size: get($font-size, 7);
        font-weight: get($font-weight, bold);
        line-height: 1.6;
        min-width: 320px;
        max-width: 632px;
        @include viewport(sm) {
          min-width: 0;
        }
      }

      .paragraph {
        margin-top: 12px;
      }

      .timeframe {
        margin-bottom: 32px;
        @include flex();

        i {
          margin: 0 8px;
          font-size: get($font-size, 3);
        }

        span {
          font-size: get($font-size, 3);
        }
      }
    }

    &-footer {
      margin-top: 32px;
      width: 100%;
      @include flex();
      @include viewport(sm) {
        @include flex(center, center, column);
      }

      .button {
        width: 100%;
      }
    }
  }
</style>
