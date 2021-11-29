<template>
  <nuxt-link class="link-block" :to="href">
    <div class="flex items-center">
      <div class="illustration">
        <div class="w-full "></div>
        <div class="w-2/3 "></div>
        <div class="w-5/6"></div>
      </div>
      <div class="flex flex-col items-start">
        <span class="title"
          >{{title}}</span
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    href: String,
  }
}
</script>

<style scoped>
.link-block {
  @apply flex;
}

.title {
  box-shadow: rgb(17, 25, 36, 0.2) 0px 1px 0px;
  @apply font-medium text-white;
}

.subtitle {
  @apply font-medium mt-1;
}

.link-block:hover .illustration {
  @apply  transition-colors bg-opacity-50;
}

.link-block:hover .title {
  @apply text-white transition-colors;
}

.illustration {
  @apply w-8 h-10 border rounded-md shadow-sm bg-white p-1.5 mr-4;
}

.illustration div {
  @apply h-1 rounded-sm mb-1;
}

@media print {
  .link-block {
    @apply hidden;
  }
}
</style>