<template>
  <main>
    <Header
      :title="
        'I\'m Dominik, a coding Designer from Austria, striving for visual clarity and simplicity.'
      "
    >
    </Header>
    <div>
      <div>
        <p class="leading-8 text-gray-700">
          Currently I’m working as a Product & Brand Designer at <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Blockpit
          </a>, supporting thousands of Users with their crypto taxes. As one of the very first employees I had the chance to shape the overall design strategy.
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          Previously I worked as a UX Engineer at <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Storyclash
          </a> and graduated from the <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            University of Applied Sciences Upper Austria
          </a>.
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          If you want to follow my journey elsewhere, you can do so on <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Twitter
          </a>, <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            LinkedIn
          </a>, <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            GitHub
          </a> or <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Dribbble
          </a>. You can also reach out to me by sending a message to <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            me@dowu.xyz
          </a>
        </p>
      </div>

      <hr class="my-16 border-gray-100" />

      <div v-for="project of projects"
          :key="project.slug">
          <h2>{{ project.title }}

            <badge v-if="!project.completed" :text="'WIP'"/>
          </h2>
          <nuxt-content :document="project" />
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
    };
  },
};
</script>
