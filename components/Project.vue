<template>
  <div class="projects">
    <nuxt-link
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      :class="['projects-element', project.locked ? 'locked' : '']"
      v-for="project of projects"
      :key="project.slug"
    >
      <div class="overlay" v-if="!project.locked">
        <arrow-right-icon :color="'grey-600'" />
      </div>
      <div class="img" :style="{ backgroundColor: '#' + project.color }">
        <img :src="require(`~/assets/img/${project.img}`)" />
        <lock-icon v-if="project.locked" :color="'white'" />
      </div>
      <div class="description">
        <h5 class="title condensed">
          {{ project.title }}
        </h5>
        <p class="subtitle">
          {{ project.subtitle }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 48px;
  @include padding(0 32px);
  @include viewport(sm) {
    margin-top: 32px;
  }

  &-element {
    height: 100%;
    transition: background-color 0.2s;
    position: relative;
    @include flex(flex-start, center, row);

    &:not(:first-child) {
      margin-top: 24px;
      @include viewport(sm) {
        margin-top: 8px;
      }
    }

    &:hover {
      .overlay {
        opacity: 1;
      }

      .img {
        transform: scale(1.03);
      }

      .icon {
        transform: translateX(0px);
      }
    }

    &.locked {
      pointer-events: none;
      user-select: none;

      .description {
        opacity: 0.3;
        filter: blur(3px);
      }

      .img {
        img {
          filter: blur(3px);
        }
      }
    }

    .title {
      @include flex(flex-start, center, row);
    }

    .subtitle {
      @include viewport(sm) {
        display: none;
      }
    }

    .img {
      min-width: 112px;
      width: 112px;
      height: 88px;
      border-radius: 4px;
      transition: transform 0.2s;
      position: relative;
      margin-right: 40px;
      @include flex(center, center, row);
      @include viewport(sm) {
        display: none;
      }

      .icon {
        width: 24px;
        height: 24px;
        background-color: rgba(var(--black), 1);
        border: 2px solid rgba(var(--grey-000), 1);
        border-radius: 6px;
        position: absolute;
        right: -4px;
        bottom: -4px;
        transform: rotate(6deg);
        @include padding(4px);
      }
    }
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 200px;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s;
    background: linear-gradient(
      to right,
      transparent,
      rgba(var(--grey-000), 0.9),
      rgba(var(--grey-000), 1)
    );
    @include flex(flex-end, center, row);
    @include viewport(sm) {
      opacity: 1;
    }

    .icon {
      transition: transform 0.2s;
      transform: translateX(-4px);
    }
  }
}
</style>