<template>
  <main>
    <Header
      :title="'I\'m Dominik, a coding Designer from Austria, striving for visual clarity and simplicity.'"
    >
    </Header>
    <div>
      <div>
        <p class="leading-8 text-gray-700">
          Currently I’m working as a Product & Brand Designer at
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Blockpit </a
          >, supporting thousands of Users with their crypto taxes. Previously I worked as a UX Engineer at
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Storyclash
          </a>.
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          If you want to follow my journey elsewhere, you can do so on
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Twitter </a
          >,
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            LinkedIn </a
          >,
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            GitHub
          </a>
          or
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Dribbble </a
          >. You can also reach out to me by sending a message to
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            me@dowu.xyz
          </a>
        </p>
      </div>

      <hr class="my-16 border-gray-100" />

      <div v-for="article of articles" :key="article.slug">
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <h2 class="hover:text-gray-600 transition cursor-pointer">
            {{ article.title }}
            <badge v-if="!article.completed" :text="'WIP'" />
          </h2>
        </nuxt-link>
        <nuxt-content :document="article" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>
