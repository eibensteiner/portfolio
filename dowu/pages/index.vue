<template>
  <div class="container">
    <div v-for="project of projects" :key="project.slug">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: project.slug } }">
        <Project
          :heading="project.title"
          :subheading="project.description"
        >
          <div class="img variant-first">
            <img :src="project.img" />
          </div>
        </Project>
      </NuxtLink>
    </div>
      <div class="grid">
        <Repository
          v-for="repository in repositories"
          :key="repository.id"
          :user="repository.owner.login"
          :repository="repository.name"
          :description="repository.description"
          :href="repository.url"
        />
      </div>
    </Project>
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
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin-bottom: 104px;
  }
}

.repository {
  &:last-child {
    & > ::v-deep .repository-heading,
    & > ::v-deep .repository-content {
      filter: blur(20px);
    }
  }
}
</style>

