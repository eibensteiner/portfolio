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
          Since 2018 I'm working as a Product & Brand Designer at
          <a
            href="https://blockpit.io"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-gray-900 hover:text-gray-600 transition"
            >Blockpit</a
          >, supporting thousands of Users with their crypto taxes. As one of
          the very first employees I had the chance to shape the overall design
          strategy of the startup.
        </p>
      </div>
      <hr class="my-16 border-gray-100"/>
      <div>
        <h2 class="font-semibold text-gray-900 text-lg leading-8 mb-3">Selected Work</h2>
        <p class="leading-8 text-gray-700 mb-12">
          You can find some of my recent work below. I'm currently working
          intensively to transform projects i worked on into case studies.
        </p>
        <nuxt-link
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          :class="'flex items-center mt-5'"
          v-for="project of projects"
          :key="project.slug"
        >
          <div class="w-24 min-w-24 h-24 rounded-md border border-gray-200 bg-gray-50 flex justify-center items-center mr-8">
            <img :src="require(`~/assets/img/${project.img}`)" />
          </div>
          <div class="w-auto">
            <h3 class="leading-8 mb-1 text-gray-900 font-semibold">
              {{ project.title }}
            </h3>
            <p class="leading-8 text-gray-700">
              {{ project.subtitle }}
            </p>
          </div>
        </nuxt-link>
      </div>
      <hr class="my-16 border-gray-100"/>
      <div>
        <h2 class="font-semibold text-gray-900 text-lg leading-8 mb-3">My Thoughts</h2>
        <p class="leading-8 text-gray-700">
          Besides my work I'll try to write down my thoughts. I've just started
          but I'll do my very best to keep things updated.
        </p>
        <nuxt-link
          :to="{ name: 'thoughts-slug', params: { slug: thought.slug } }"
          :class="[thought.locked ? 'locked' : '']"
          v-for="thought of thoughts"
          :key="thought.slug"
          >{{ thought.title }}
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

    const thoughts = await $content("thoughts", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
      thoughts,
    };
  },
};
</script>
