<template>
  <main>
    <h1 class="relative inline-flex items-center">
      <lib-back-button></lib-back-button>
      Dominik Wurm
    </h1>
    <div>
      <div>
        <blockquote>
          I'm currently not actively searching for a new position but I'm always
          open for exciting opportunities.
        </blockquote>
        <lib-link-block
          class="mt-8"
          :title="'Download resume'"
          :subtitle="'Get an adjusted version of this page'"
          :url="'#'"
        ></lib-link-block>
      </div>

      <div>
        <h2>Experience</h2>
        <h3>
          Product & Brand Designer at
          <a href="https://blockpit.io">Blockpit</a>
          <code class="ml-2">2018 to now</code>
        </h3>
        <p>
          I joined <a href="https:/blockpit.io/">Blockpit</a> in 2018 as one of
          their very first employees. In this phase I had a
          <strong>huge influence</strong> and
          <strong>responsibility scope</strong> and supported the team to the
          road of the
          <a
            href="https://blog.blockpit.io/en/blockpit-receives-over-10-million-dollar-series-a-investment"
            >$10m Series A</a
          >.
        </p>
        <blog-image
          :src="'about/bp.jpg'"
          :caption="'Me and Christina. The latest addition to the design team.'"
        />
        <h3>
          UX Engineer at <a href="https://storyclash.com">Storyclash</a>
          <code class="ml-2">2017 to 2018</code>
        </h3>
        <p>
          In 2017 I made my
          <strong>first steps as a designer & frontend developer</strong> by
          joining <a href="#">Storyclash</a>. First as an intern, but starting
          with 2018 as a permanent employee besides my studies.
        </p>
      </div>

      <div>
        <h2>Education</h2>
        <h3>
          <a href=""> Comm. & Knowledge Media</a> at
          <a href="">UAS Upper Austria</a>
          <code class="ml-2">2015 to 2018</code>
        </h3>
        <p>
          After my A-levels I wanted to follow my passion for technology and
          design by studying <a>Communication & Knowledge Media</a> at the
          <a>UAS Upper Austria</a>, where I set my personal focus on
          <strong>product design</strong> and
          <strong>frontend development</strong>. In 2018 I completed the studies
          with a <strong>BA (1.5)</strong>.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
h2 + h3 {
  @apply mt-8;
}

.link-block {
  @apply w-full flex;
}

@media print {
  @page {
    margin: 0;
  }

  .link-block {
    @apply hidden;
  }
}

.illustration {
  @apply w-11 h-14 border rounded-md shadow-sm bg-white p-2;
}

.illustration div {
  @apply h-1 rounded-sm mb-1;
}
</style>