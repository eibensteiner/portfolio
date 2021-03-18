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
::v-deep .nuxt-content {
  &-container {
    width: 100%;
  }

  & > * {
    &:not(figure) {
      margin-left: 32px;
      margin-right: 32px;
    }
  }

  & > figure {
    margin-bottom: 2rem;
  }

  & > h1,
  & > h2 {
    margin-top: 4rem;

    a {
      display: none;
    }
  }

  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin-top: 2.5rem;

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
