<template>
  <footer class="footer">
    <div class="column flex flex-1 flex-col items-start">
      <h4>Sites</h4>
      <nuxt-link :to="'/'">Home</nuxt-link>
      <nuxt-link :to="'/about'">About</nuxt-link>
    </div>
    <div class="column flex flex-1 flex-col items-start">
      <h4>Connect</h4>
      <a class="flex items-center">Email<lib-button-copy class="ml-3" :value="'me@dowu.xyz'"/></a>
      <a>Twitter</a>
      <a>GitHub</a>
    </div>
    <div class="column flex flex-1 flex-col items-start">
      <h4>More</h4>
      <a>Resume</a>
      <a>RSS</a>
    </div>
    <div class="column flex flex-1 flex-col items-end">
      <nuxt-link :to="'/'">
        <img src="@/assets/img/about/me.jpg" class="rounded-full w-8 h-8" />
      </nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.column {
  img {
    @apply w-8 h-8 rounded-full;
  }

  .heading {
    @apply text-white font-semibold h-8 inline-flex items-center;
  }
}

.footer {
  @apply flex;

  a {
    @apply text-slate-dark-11 font-medium transition-colors cursor-pointer inline-flex leading-6 w-auto;

    img {
      @apply hover:scale-105 hover:opacity-80 transition-all;
    }

    span {
      @apply ml-2 text-slate-dark-9 invisible opacity-0 transition-opacity;
    }
  }
}

.footer a:hover span {
  @apply visible opacity-100;
}

.footer a:not(:first-child) {
  @apply mt-2;
}
</style>