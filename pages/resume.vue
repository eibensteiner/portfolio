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
        <h2>
          Product & Brand Designer at
          <a href="https://blockpit.io" target="_blank" rel="noopener">Blockpit</a>
          <code class="ml-2">2018 to now</code>
        </h2>
        <p>
          I joined <a href="https:/blockpit.io/" target="_blank" rel="noopener">Blockpit</a> in 2018 as one of
          their very first employees. In this phase I had a
          <strong>huge influence</strong> and
          <strong>responsibility scope</strong> and supported the team to the
          road of the
          <a
            href="https://blog.blockpit.io/en/blockpit-receives-over-10-million-dollar-series-a-investment" target="_blank" rel="noopener"
            >$10m Series A</a
          >.
        </p>
        <lib-image
          :high-src="'about/bp.jpg'" :low-src="'about/bp-low.jpg'"
          :caption="'Me and Christina. The latest addition to the design team.'"
        />
        <h2>
          UX Engineer at <a href="https://storyclash.com" target="_blank" rel="noopener">Storyclash</a>
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
        <h2>About me</h2>
        <p>Hey there, I'm Dominik, 26 and currently living in Linz, Austria. Friends and colleagues would probably describe me as a multidisciplinary designer with a high interest in DesignOps and Frontend development.</p>
        <p>I started my design career as a small child when drawing images all the time. I was a quite silent, but talented kid according to quite everybody.</p>
        <p>
          The relationship with design began when at 12 years old, I started
          doing soccer wallpapers. I've done tons of it. It was a way to spend
          time at home.
        </p>
        <p>
          It all changed around 8 years ago when I discovered Dribbble. That was
          my gate to this world. I started copying designs and trying to
          implement them with HTML and CSS. I never thought that someday I could
          do this for a living.
        </p>
        <p>
          At the age of 18, I landed my first design position: Jr. UX/UI
          Designer at Aerolab. I'll be forever grateful to them for giving me
          the opportunity.
        </p>
        <p>
          Nowadays, I'm working at Linear as a Product Designer. If my profile
          fits, I can also work with you. Drop me a word, and let's talk.
        </p>
      </div>

      <div>
        <h2>
          <a href=""> Comm. & Knowledge Media</a> at
          <a href="">UAS Upper Austria</a>
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