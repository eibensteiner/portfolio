<template>
  <div class="container">
    <section class="section">
      <Header
        :title="'Thoughts'"
        :subtitle="'Explore any website through a lightweight and centralized navigation system'"
        :variant="'second'"
      />

      <div v-for="thought of thoughts" :key="thought.slug">
        <NuxtLink
          class="thought"
          :to="{ name: 'thought-slug', params: { slug: thought.slug } }"
        >
          <span class="date">{{ formatDate(thought.createdAt) }}</span>
          <div>
            <strong>{{ thought.title }}</strong>
            <p>{{ thought.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const thoughts = await $content("thoughts", params.slug)
      .only(["title", "description", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      thoughts,
    };
  },

  methods: {
    formatDate(date) {
      const options = { month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  & > * {
    margin-bottom: 16px;
  }
}

.thought {
  font-size: 14px;
  margin-top: 32px;
  display: flex;

  .date {
    width: 48px;
    margin-right: 32px;
    line-height: 24px;
  }

  & > div {
    & > * {
      line-height: 24px;
    }
  }
}
</style>
