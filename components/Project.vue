<template>
  <div class="projects card">
    <nuxt-link
      :to="{ name: 'projects-slug', params: { slug: project.slug } }"
      :class="['projects-element']"
      v-for="project of projects"
      :key="project.slug"
    >
      <div class="description">
        <h3 class="title">
          {{ project.title }}<arrow-right-icon :color="'grey-600'" />
        </h3>
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
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1px;
  background-color: rgba(var(--grey-200), 1);

  &-element {
    height: 100%;
    transition: background-color 0.2s;
    background-color: white;
    @include padding(32px);

    &:hover {
      background-color: rgba(var(--grey-000), 1);
    }

    h3 {
      @include flex(flex-start, center, row);
    }

    .icon {
      margin-left: 12px;
    }
  }
}
</style>