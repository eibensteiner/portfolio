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
  margin: 64px 0;

  & > * {
    &:not(img) {
      @include padding(0 32px);
    }

    &:first-child {
      margin-top: 0;
    }
  }

  & > p {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
}
</style>