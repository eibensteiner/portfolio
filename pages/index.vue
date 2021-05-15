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
          Originally I grew up in a small town near Linz, Upper Austria
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          In 2015 I started my studies in Hagenberg at the
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            University of Applied Sciences Upper Austria
          </a>
          and graduated with a BA.
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          Since 2018 I'm working as a Product & Brand Designer at
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Blockpit</a
          >, supporting thousands of Users with their crypto taxes. As one of
          the very first employees I had the chance to shape the overall design
          strategy of the startup.
        </p>
      </div>

      <hr class="my-16 border-gray-100" />

      <div>
        <h2 class="font-semibold text-gray-900 text-xl leading-10 mb-3">
          Connect with me
        </h2>
        <p class="leading-8 text-gray-700">
          Please send me a mail to
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            me@dowu.xyz</a
          >
          if you want to get in touch.
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          I'm usually not taking on freelance projects. But if you think you got
          a cool idea and you need my help, feel free to contact me.
        </p>
        <p class="leading-8 text-gray-700 mt-5">
          If you want to follow my journey, you can follow me on
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            Twitter</a
          >,
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            LinkedIn</a
          >,
          <a
            class="font-medium text-gray-900 hover:text-gray-600 transition cursor-pointer"
          >
            GitHub</a
          >
          and
          <a class="font-medium text-gray-900 hover:text-gray-600 transition">
            Dribbble</a
          >.
        </p>
      </div>

      <hr class="my-16 border-gray-100" />

      <div v-for="project of projects"
          :key="project.slug">
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
