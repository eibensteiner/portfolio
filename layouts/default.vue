<template>
  <div class="default">
    <Nuxt />
    <!--<overlay-command></overlay-command>-->
    <hr />
    <footer class="footer">
      <div class="column flex flex-1 flex-col items-start">
        <h4>Sites</h4>
        <link-inline :href="'/'" :variant="'second'">Home</link-inline>
        <link-inline :href="'/about'" :variant="'second'">About</link-inline>
      </div>
      <div class="column flex flex-1 flex-col items-start">
        <h4>Connect</h4>
        <link-inline :variant="'second'" :isInternal="false"
          >Email<button-copy class="ml-3" :value="'me@dowu.xyz'"
        /></link-inline>
        <link-inline :variant="'second'" :isInternal="false"
          >Twitter</link-inline
        >
        <link-inline :variant="'second'" :isInternal="false"
          >GitHub</link-inline
        >
      </div>
      <div class="column flex flex-1 flex-col items-start">
        <h4>More</h4>
        <link-inline :href="'/feed'" :variant="'second'" :isInternal="false">RSS</link-inline>
      </div>
      <div class="column flex flex-1 flex-col items-end">
        <link-inline :href="'/'">
          <img src="@/assets/img/about/me.jpg" class="rounded-full w-8 h-8" />
        </link-inline>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.default {
  @apply w-full flex flex-col items-center justify-center px-6 py-28 sm:px-0;

  & > * {
    @apply w-full max-w-xl;
  }
}

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

  img {
    @apply hover:opacity-80 transition-all;
  }
}

.footer a:not(:first-child) {
  @apply mt-2;
}
</style>
