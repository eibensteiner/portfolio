<template>
  <main class="main">
    <Header
      :title="project.title"
      :subtitle="{ date: project.createdAt, url: project.url }"
    />
    <div class="container-outer">
      <hr />
      <nuxt-content :document="project" />
      <hr/>
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