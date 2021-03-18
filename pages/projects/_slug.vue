<template>
  <main class="main">
    <Header
      :title="project.title"
      :subtitle="{ date: project.createdAt, url: project.url }"
    />
    <div class="container-outer">
      <hr />
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
    return {
      title: this.project.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.subtitle,
        },
      ],
    };
  },

  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    const [previous, next] = await $content("projects")
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
  height: 200px;
  width: 100%;
  overflow: hidden;
  @include flex(center, center, row);
}

::v-deep .nuxt-content {
  &-container {
    width: 100%;
  }

  & > * {
    &:not(img) {
      margin-left: 32px;
      margin-right: 32px;
    }
  }

  & > img {
    margin-bottom: 2rem;
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: 4rem 0 0 0;

    a {
      display: none;
    }
  }

  & > p,
  & > div {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
