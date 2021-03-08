<template>
  <main class="main">
    <Header
      :title="
        'I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism.'
      "
    >
    </Header>
    <div class="container-outer">
      <hr />
      <div class="container-inner">
        <p>
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
      <hr />
      <div class="container-inner">
        <h5 class="condensed">Selected Work</h5>
        <p>
          You can find some of my recent work below. I'm currently working
          intensively to transform projects i worked on into case studies.
        </p>
      </div>
      <project :projects="projects" />
      <hr />
      <div class="container-inner">
        <h5 class="condensed">My Thoughts</h5>
        <p>
          Besides my work you can find me travelling the austrian alps or
          northern europe. Furthermore I'm a bit of a coffee & football junkie.
        </p>
        <nuxt-link
          :to="{ name: 'thoughts-slug', params: { slug: thought.slug } }"
          :class="[thought.locked ? 'locked' : '']"
          v-for="thought of thoughts"
          :key="thought.slug"
          >{{ thought.title }}
          <arrow-right-icon :color="'grey-600'" />
        </nuxt-link>
      </div>
      <hr />
    </div>
  </main>
</template>

<script>
import ArrowRightIcon from "~/components/icons/ArrowRightIcon.vue";
export default {
  components: { ArrowRightIcon },
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only([
        "title",
        "subtitle",
        "img",
        "thumbnail",
        "locked",
        "slug",
        "color",
      ])
      .sortBy("createdAt", "desc")
      .fetch();

    const thoughts = await $content("thoughts", params.slug)
      .only(["title", "locked", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
      thoughts,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-inner {
  @include padding(0 32px);
}

::v-deep .header {
  &-left {
    max-width: none !important;
  }
}
</style>
