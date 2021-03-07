<template>
  <main class="main">
    <Header :title="thought.title" :subtitle="{ date: thought.createdAt }" />
    <div class="container-outer">
      <hr />
      <nuxt-content :document="thought" />
      <hr />
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.thought.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.thought.title,
        },
      ],
    };
  },

  async asyncData({ $content, params }) {
    const thought = await $content("thoughts", params.slug).fetch();
    return { thought };
  },
};
</script>

<style lang="scss" scoped>
.project-image {
  border-radius: 8px;
  height: 200px;
  width: 100%;
  overflow: hidden;
  @include flex(center, center, row);
}

::v-deep .nuxt-content {
  margin: 48px 0;

  &-container {
    width: 100%;
  }

  & > * {
    &:not(img) {
      @include padding(0 32px);
    }

    &:first-child {
      margin-top: 0;
    }
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: 4rem 0 0 0;
  }

  & > p,
  & > div {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>