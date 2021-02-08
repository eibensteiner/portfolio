<template>
  <div class="container">
    <Header
      :title="'Dominik Wurm'"
      :subtitle="'Product Designer at Blockpit'"
    />
    <Project
      v-for="project of projects"
      :key="project.slug"
      :title="project.title"
      :subtitle="project.description"
      :color="project.color"
      :img="project.img"
      :to="{ name: 'project-slug', params: { slug: project.slug } }"
    />
  </div>
</template>

<script>
export default{
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "description", "img", "slug", "color"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>

::v-deep .project {
  &:nth-of-type(3n) {
    width: 100%;
  }
}
</style>

