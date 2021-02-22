<template>
  <nuxt-link
    :to="to"
    :class="['project', setClassBasedOnContrast(color)]"
    :style="{ backgroundColor: '#' + color }"
  >
    <div class="project-left">
      <div class="description">
        <h3 class="title">{{ title }}</h3>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <div class="cta" v-html="cta"></div>
    </div>
    <div class="project-right">
      <img :src="require(`~/assets/img/${img}`)" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    color: String,
    to: Object,
    img: String,
    cta: String,
  },
  methods: {
    setClassBasedOnContrast(color) {
      color = color.replace("#", "");
      let r = parseInt(color.substr(0, 2), 16);
      let g = parseInt(color.substr(2, 2), 16);
      let b = parseInt(color.substr(4, 2), 16);
      let value = (r * 299 + g * 587 + b * 114) / 1000;
      return value >= 128 ? "background-light" : "background-dark";
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  border-radius: 8px;
  height: 416px;
  width: 100%;
  overflow: hidden;
  @include flex(space-between, flex-start, row);

  &:not(:last-of-type) {
    margin-bottom: 32px;
  }

  &:hover {
    transform: scale(1.01);
  }

  &.background-light {
    h3,
    .cta {
      color: rgba(var(--black), 1);
    }

    p,
    a {
      color: rgba(var(--grey-600), 1);
    }
  }

  &.background-dark {
    h3,
    .cta {
      color: rgba(var(--white), 1);
    }

    p,
    a {
      color: rgba(var(--grey-400), 1);
    }
  }

  &-left,
  &-right {
    width: 50%;
    height: 100%;
  }

  &-left {
    position: relative;
    margin-right: 24px;
    @include padding(32px);
    @include flex(space-between, flex-start, column);

    .cta {
      font-weight: 600;
    }
  }

  &-right {
    @include flex(flex-end, center, column);

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>