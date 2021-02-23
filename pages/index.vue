<template>
  <main class="main">
    <Header
      :title="'Dominik Wurm'"
      :subtitle="{ text: 'Product Designer at Blockpit' }"
    >
    </Header>
    <div class="container">
      <img src="@/assets/img/about/sarah.jpg" />
      <div class="container">
        <p>
          Explore any website through a lightweight and centralized navigation
          system. Explore any website through a lightweight and centralized
          navigation system.
        </p>
        <p>
          Explore any <code>website</code> through a lightweight and centralized
          navigation system. Explore any website through a lightweight and
          centralized navigation system. Explore <a>any website</a> through a
          lightweight and centralized navigation system
        </p>
        <h5>Projects</h5>
        <p>
          Explore any website through a lightweight and centralized navigation
          system. Explore any website <code>through a lightweight</code> and
          centralized <a>navigation system</a>. Explore any website through a
          lightweight and centralized navigation system
        </p>
      </div>
      <project :projects="projects" />
      <div class="container">
        <p>
          Explore any website through a lightweight and centralized navigation
          system. Explore any website through a lightweight and centralized
          navigation system.
        </p>
        <h5>Some more facts about me</h5>
        <p>
          Explore any website through a lightweight and centralized navigation
          system. Explore any website through a lightweight and centralized
          navigation system. Explore any website through a lightweight and
          centralized navigation system
        </p>
      </div>
      <carousel :slides="slides" />
    </div>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "subtitle", "cta", "img", "slug", "color"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
    };
  },

  data() {
    return {
      slides: [
        {
          title: "I love dogs (way) more than cats",
          subtitle:
            "I’m currently not looking for a new job, but here is my resume if you’re into that. If you want to see how I built it, here is a GitHub link to the repository. Im currently not looking for a new job, but here is my resume if you’re into that.",
        },
        {
          title: "Another super title",
          subtitle:
            "I’m currently not looking for a new job, but here is my resume if you’re into that. If you want to see how I built it, here is a GitHub link to the repository. Im currently not looking for a new job, but here is my resume if you’re into that.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  .container {
    margin-top: 64px;
    @include padding(0 32px);
  }
}

img {
  position: relative;
  border-radius: 8px;
  height: 416px;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  @include flex(space-between, flex-start, row);
}
</style>