<template>
  <div class="projects">
    <nuxt-link
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      :class="['projects-element']"
      v-for="project of projects"
      :key="project.slug"
    >
      <div class="overlay">
        <arrow-right-icon :color="'grey-600'" />
      </div>
      <div class="img" :style="{ backgroundColor: '#' + project.color }">
        <img :src="require(`~/assets/img/${project.img}`)" />
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

  &-element {
    height: 100%;
    transition: background-color 0.2s;
    position: relative;
    @include flex(flex-start, center, row);

    &:not(:first-child) {
      margin-top: 32px;
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

    h5 {
      @include flex(flex-start, center, row);
    }

    .description {
      margin-left: 40px;
    }

    .img {
      min-width: 112px;
      width: 112px;
      height: 88px;
      border-radius: 4px;
      transition: transform 0.2s;
      @include flex(center, center, row);
    }

    .icon {
      transition: transform 0.2s;
      transform: translateX(-4px);
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
  }
}
</style>