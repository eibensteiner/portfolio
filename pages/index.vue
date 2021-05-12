<template>
  <main class="main">
    <Header
      :title="
        'I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism.'
      "
    >
    </Header>
    <div class="container-outer">
      <div class="container-inner">
        <p class="leading-8">
          Since 2018 I'm working as a Product & Brand Designer at
          <a
            href="https://blockpit.io"
            target="_blank"
            rel="noopener noreferrer"
            >Blockpit</a
          >, supporting thousands of Users with their crypto taxes. As one of
          the very first employees I had the chance to shape the overall design
          strategy of the startup. <br /><br />
          Before that I was a UX Engineer at
          <a
            href="https://storyclash.com"
            target="_blank"
            rel="noopener noreferrer"
            >Storyclash</a
          >
          and graduated from the
          <a
            href="https://www.fh-ooe.at/en/hagenberg-campus/"
            target="_blank"
            rel="noopener noreferrer"
            >University of Applied Sciences Upper Austria</a
          >.
        </p>
      </div>
      <div class="container-inner">
        <h2 class="font-semibold text-gray-900 text-lg leading-8 mb-3">Selected Work</h2>
        <p class="leading-8 text-gray-700">
          You can find some of my recent work below. I'm currently working
          intensively to transform projects i worked on into case studies.
        </p>
        <nuxt-link
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          :class="'flex items-center'"
          v-for="project of projects"
          :key="project.slug"
        >
          <div class="w-24 h-24 rounded-md border border-gray-200 bg-gray-50 flex justify-center items-center">
            <img :src="require(`~/assets/img/${project.img}`)" />
          </div>
          <div class="description">
            <h5 class="title condensed">
              {{ project.title }}
            </h5>
            <p class="subtitle">
              {{ project.subtitle }}
            </p>
          </div>
        </nuxt-link>
      </div>
      <div class="container-inner">
        <h4 class="condensed">My Thoughts</h4>
        <p class="leading-8">
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
