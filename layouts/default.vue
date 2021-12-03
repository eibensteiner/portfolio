<template>
  <div class="default">
    <Nuxt />
    <!--<lib-command></lib-command>-->
    <hr />
    <footer>
      <div class="column items-start">
        <h4>Sites</h4>
        <a>Home</a>
        <a>About</a>
        <a>Dribbble</a>
      </div>
      <div class="column items-start">
        <h4>Connect</h4>
        <a>Twitter</a>
        <a>GitHub</a>
        <a>Dribbble</a>
        <a>Contact Me</a>
      </div>
      <div class="column items-start">
        <h4>Connect</h4>
        <a>Uses</a>
        <a>Snippets</a>
      </div>
      <div class="column items-end">
        <img src="@/assets/img/about/me.jpg" class="rounded-full"/>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.default {
  @apply w-full flex flex-col items-center justify-center px-6 py-28 sm:px-0;
}

.default > * {
  @apply w-full max-w-xl;
}

.column img {
  @apply w-8 h-8 rounded-full;
}

.column .heading {
  @apply text-white font-semibold h-8 inline-flex items-center;
}

footer {
  @apply flex justify-between items-start;
}

footer > * {
  @apply flex-1 flex flex-col;
}

footer a {
  @apply text-slate-dark-11 font-medium transition-colors  cursor-pointer inline-flex leading-6 w-auto;
}

footer a:not(:first-child) {
  @apply mt-3;
}
</style>
