<template>
  <main>
    <h1>
      I'm Dominik, a coding Designer from Austria, striving for visual clarity
      and simplicity.
    </h1>
    <p>
      I'm <em>Dominik</em>, a coding <em>designer based in Linz, Austria</em>.
    </p>
    <p>
      Currently I’m working as a
      <em>Product & Brand Designer</em> at
      <lib-link :href="'https://blockpit.io'">Blockpit</lib-link>, supporting
      thousands of Users with their crypto taxes.
    </p>
    <p>
      If you want to follow my journey, you can do so on
      <lib-link :href="'https://twitter.com/wurmdo'">Twitter</lib-link>,
      <lib-link :href="'https://dribbble.com/dowu'">Dribbble</lib-link>,
      <lib-link :href="'https://linkedin.com/in/dowu'">LinkedIn</lib-link>
      or
      <lib-link :href="'https://github.com/dowu'">GitHub</lib-link>
    </p>

    <hr />

    <div class="featured-article">
      <div
        class="
          w-40
          h-28
          bg-slate-dark-3
          rounded-lg
          shadow-sm
          border border-slate-dark-5
          flex
          items-center
          justify-center
          relative
          overflow-hidden
        "
      >
        <img src="@/assets/img/about/me_vector.svg" class="z-20 -rotate-6" />
      </div>
      <div class="ml-10 flex-1">
        <h3 class="mt-0">More about Me</h3>
        <p class="mb-0">
          Building a design system with Sandbox couldn't be easier.
        </p>
      </div>
    </div>

    <template v-for="article of articles">
      <hr />
      <section class="article relative">
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <h1 class="mt-3 mb-3 relative">
            {{ article.title }}
            <div class="overlay">
              <button>
                <icon-arrow-right :variant="'first'"></icon-arrow-right>
              </button>
            </div>
          </h1>
        </nuxt-link>
        <nuxt-content :document="article" />
      </section>
    </template>

    <hr />

    <div class="banner">
      <div class="banner-left">
        <h2>Writing</h2>
        <p>This Section is part of the now page movement by Dominik.</p>
        <button>Contact Me</button>
      </div>
      <div class="banner-right">
        <img src="@/assets/img/about/chat_bubbles.svg" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const articles = await $content(params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped>
.featured-article {
  @apply flex items-center mt-10;
}

.article h1 .overlay {
  @apply absolute right-0 bottom-0 top-0 bg-gradient-to-l from-slate-dark-1 rounded-lg invisible opacity-0 transition-all flex items-center justify-end w-full;
}

.article h1 button {
  @apply w-6 h-6 flex justify-center items-center p-0;
}

.article h1:hover .overlay {
  @apply opacity-100 visible;
}

.article h1 {
  @apply text-xl text-white font-semibold mb-4 font-serif inline-flex;
}

.article h2 {
  @apply text-base text-white font-semibold w-full mb-2 mt-6 font-serif;
}

.banner {
  @apply flex justify-between items-center bg-slate-dark-2 border rounded-lg mt-12;
}

.banner-left {
  @apply p-6 max-w-xs;
}

.banner-left button {
  @apply mt-6;
}
</style>