<template>
  <main class="main">
    <Header :title="project.title" :subtitle="project.subtitle" />
    <div class="container">
      <div
        class="project-image"
        :style="{ backgroundColor: '#' + project.color }"
      >
        <img :src="require(`~/assets/img/${project.img}`)" />
      </div>
      <project-summary
        v-if="project.summary"
        :problem="project.summary.problem"
        :solution="project.summary.solution"
        :role="project.summary.role"
      />
      <nuxt-content :document="project" />
      <project-pagination :previous="previous" :next="next" />
    </div>
  </main>
</template>

<script>
export default {
  head() {
    // Set Meta Tags for this Page
  },
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    const [previous, next] = await $content("projects")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { project, previous, next };
  },
};
</script>

<style lang="scss" scoped>
.project-image {
  border-radius: 8px;
  height: 416px;
  width: 100%;
  overflow: hidden;
  @include flex(flex-end, flex-end, row);
}

::v-deep .nuxt-content {
  margin: 48px 0;

  & > * {
    &:not(img) {
      @include padding(0 32px);
    }

    &:first-child {
      margin-top: 0;
    }
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: 3rem 0 0 0;
  }

  & > p,
  & > div {
    &:not(:last-child) {
      margin-bottom: 1.602rem;
    }
  }
}
</style>