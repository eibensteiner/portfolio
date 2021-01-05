<template>
  <div class="container">
    <Header
      :title="'Because we are all humans'"
      :subtitle="'I’m Dominik, a Coding Designer from Austria and a human like you. I love minimal & functional Interfaces. <br/><br/> For the past few years I have worked for several Startups as a Code savvy designer. I had the chance to build products from the ground up'"
    >
      <template v-slot:title>
        <SimpleButton :text="'Contact me'" />
      </template>
    </Header>
    <Project
      v-for="project of projects"
      :key="project.slug"
      :heading="project.title"
      :subheading="project.description"
      :img="project.img"
      :date="{
        startDate: project.date.startedAt,
        endDate: project.date.endedAt,
      }"
      :to="{ name: 'project-slug', params: { slug: project.slug } }"
    />
    <Header
      :title="'More recent Projects'"
      :subtitle="'Explore any website through a lightweight and centralized navigation system'"
      :variant="'second'"
    />
    <div class="grid">
      <Repository
        v-for="repository in repositories"
        :key="repository.id"
        :user="repository.owner.login"
        :repository="repository.name"
        :description="repository.description"
        :to="repository.html_url"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      repositories: null,
    };
  },

  created: function () {
    axios.get("https://api.github.com/users/dowu/repos").then((response) => {
      this.repositories = response.data;
    });
  },

  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "description", "img", "slug", "date"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
    };
  },
});
</script>

<style lang="scss" scoped>
.repository {
  &:last-child {
    & > ::v-deep .repository-heading,
    & > ::v-deep .repository-content {
      filter: blur(20px);
    }
  }
}
</style>

