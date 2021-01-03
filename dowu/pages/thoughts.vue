<template>
  <div class="container">
    <div class="card" v-for="thought of thoughts" :key="thought.slug">
      <NuxtLink :to="{ name: 'thought-slug', params: { slug: thought.slug } }">
        <h2>{{ thought.title }}</h2>
        <p>by {{ thought.author.name }}</p>
        <p>{{ thought.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const thoughts = await $content("thoughts", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      thoughts,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
