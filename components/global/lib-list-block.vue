<template>
  <div class="list-block">
    <div class="list-entry">
      <div>
        <span class="text-slate-dark-11">Product & Brand Designer</span>
        <lib-badge :label="'2019'"/>
      </div>
      <hr/>
      <a class="text-white">Blockpit</a>
    </div>
    <div class="list-entry">
      <div>
        <span class="text-slate-dark-11">UX Engineer</span>
        <lib-badge :label="'2019'"/>
      </div>
      <hr/>
      <a class="text-white">Storyclash</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-entry {
    @apply flex justify-between items-center;

    &:not(:first-child) {
        @apply mt-2;
    }
}

hr {
    @apply flex-1 border-dashed mx-4 border-slate-dark-5 my-0;
}
</style>