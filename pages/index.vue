<template>
  <main class="main">
    <Header
      :title="'I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism.'"
    >
    </Header>
    <div class="container-outer">
      <hr />
      <div class="container-inner">
        <p>
          Since 2018 I'm working as a Product & Brand Designer at
          <a>Blockpit</a>, supporting +15k Users with their crypto taxes. As one
          of the very first employees I had the chance to shape the overall
          design strategy of the startup. <br /><br />
          Before that I was a UX Engineer at <a>Storyclash</a> and graduated
          from the <a>University of Applied Sciences Upper Austria</a>.
        </p>
      </div>
      <hr />
      <div class="container-inner">
        <h5>Selected Work</h5>
        <p>
          You can find some of my recent work below. I'm currently working
          intensively to transform projects i worked on into case studies.
        </p>
      </div>
      <project :projects="projects" />
      <hr />
      <div class="container-inner">
        <h5>Some more facts about me</h5>
        <p>
          Besides my work you can find me travelling the austrian alps or
          northern europe. Furthermore I'm a bit of a coffee & football junkie.
        </p>
      </div>
      <hr />
      <!--<carousel :slides="slides" />-->
    </div>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "subtitle", "cta", "img", "thumbnail", "slug", "color"])
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
.container-inner {
  @include padding(0 32px);
}

::v-deep .header {
  margin-bottom: 0 !important;

  &-left {
    max-width: none !important;
  }
}
</style>