<template>
  <main>
    <lib-title :hasBackButton="true">Dominik Wurm</lib-title>
    <blockquote>
      I'm currently not actively searching for a new position but I'm always
      open for exciting opportunities.
    </blockquote>
    <h2>About me</h2>
    <p>
      Hey there, I'm Dominik ({{ age }}) and currently living and working in
      <lib-link :href="'https://www.instagram.com/explore/tags/stahlstadt/'"
        >#stahlstadt</lib-link
      >,
      <lib-link :href="'https://www.instagram.com/explore/tags/linz/'"
        >#linz</lib-link
      >,
      <lib-link :href="'https://www.instagram.com/explore/tags/austria/'"
        >#austria</lib-link
      >.
    </p>
    <p>
      After my A-levels I wanted to follow my passion for technology and design
      by studying
      <lib-link
        :href="'https://www.fh-ooe.at/en/hagenberg-campus/studiengaenge/bachelor/communication-and-knowledge-media/'"
        >Communication & Knowledge Media</lib-link
      >
      at the
      <lib-link :href="'https://www.fh-ooe.at/en/hagenberg-campus/'"
        >UAS Upper Austria</lib-link
      >, where I set my personal focus on <strong>product design</strong> and
      <strong>frontend development</strong>. In 2018 I completed the studies
      with a <strong>BA (1.5)</strong>.
    </p>
    <p>
      Friends and colleagues would probably describe me as a
      <strong>multidisciplinary designer</strong> with a high interest in
      <strong>designOps</strong> and <strong>frontend development</strong>.
    </p>
    <p>
      Besides design I love to <strong>travel</strong> (especially to northern
      europe) and <strong>tinker on my own projects</strong>.
    </p>
    <h3>
      Product & Brand Designer at
      <lib-link :href="'https://blockpit.io'">Blockpit</lib-link>
      <code class="ml-2">2018 to now</code>
    </h3>
    <p>
      I joined
      <lib-link :href="'https://blockpit.io'">Blockpit</lib-link>
      in 2018 as one of their very first employees. In this phase I had a
      <strong>huge influence</strong> and
      <strong>responsibility scope</strong> and supported the team to the road
      of the
      <lib-link
        :href="'https://blog.blockpit.io/en/blockpit-receives-over-10-million-dollar-series-a-investment'"
        >$10m Series A</lib-link
      >.
    </p>
    <lib-image
      :high-src="'about/bp.jpg'"
      :low-src="'about/bp-low.jpg'"
      :caption="'Me and Christina. The latest addition to the design team.'"
    />
    <h3>
      UX Engineer at
      <lib-link :href="'https://storyclash.com'">Storyclash</lib-link>
      <code class="ml-2">2017 to 2018</code>
    </h3>
    <p>
      In 2017 I made my
      <strong>first steps as a designer & frontend developer</strong> by joining
      <lib-link :href="'https://storyclash.com'">Storyclash</lib-link>. First as
      an intern, but starting with 2018 as a permanent employee besides my
      studies.
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      age: this.getAge(new Date(1994, 10, 30)),
    };
  },

  methods: {
    getAge(d1, d2) {
      d2 = d2 || new Date();
      var diff = d2.getTime() - d1.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    },
  },
};
</script>

<style scoped>
h2 + h3 {
  @apply mt-8;
}

.link-block {
  @apply w-full flex;
}

.illustration {
  @apply w-11 h-14 border rounded-md shadow-sm bg-white p-2;
}

.illustration div {
  @apply h-1 rounded-sm mb-1;
}
</style>