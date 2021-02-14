<template>
  <main class="main">
    <Header :title="project.title" :subtitle="project.subtitle"> </Header>
    <div class="container">
      <nuxt-content :document="project" />
    </div>
    <project-summary
      v-if="project.summary"
      :problem="project.summary.problem"
      :solution="project.summary.solution"
      :role="project.summary.role"
    />
    {{previous}} {{next}}
    <project-pagination :previous="previous" :next="next"/>
  </main>
</template>

<script lang="ts">
export default {
  head() {
    // Set Meta Tags for this Page
  },
  async asyncData({ $content, params }: { $content: any; params: any }) {
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