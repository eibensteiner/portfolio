<template>
  <main>
    <h1 class="relative inline-flex items-center">
      <lib-back-button></lib-back-button>
      Dominik Wurm
    </h1>
    <div>
      <div>
        <p>
          Friends and colleagues would probably describe me as a
          <strong>multidisciplinary designer</strong> with a high interest in
          <strong>DesignOps</strong> and <strong>frontend development</strong>.
        </p>
        <p>
          Besides Design <strong>I love to travel</strong> (especially to
          northern europe) and <strong>tinker on my own projects</strong>.
        </p>
        <lib-link-block
          class="mt-8"
          :title="'Download resume'"
          :subtitle="'specific subtitle for the resume'"
          :url="'#'"
        ></lib-link-block>
      </div>

      <div>
        <h2>
          Product & Brand Designer <a href="#">@blockpit</a>
          <code class="ml-2">2018 to present</code>
        </h2>
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
      </div>

      <div>
        <h2>
          UX Engineer <a href="#">@storyclash</a>
          <code class="ml-2">2017 to 2018</code>
        </h2>
        <p>
          In 2017 I made my
          <strong>first steps as a designer & frontend developer</strong> by
          joining <a href="#">Storyclash</a>. First as an intern, but starting
          with 2018 as a permanent employee besides my studies.
        </p>
      </div>

      <div>
        <h2>
          Communication & Knowledge Media <a href="#">@fhooe</a>
          <code class="ml-2">2015 to 2018</code>
        </h2>
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