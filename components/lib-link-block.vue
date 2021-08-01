<template>
  <a class="link-block" :href="url">
    <div class="flex items-center">
      <div class="illustration mr-5">
        <div class="w-full bg-gray-400"></div>
        <div class="w-2/3 bg-gray-300"></div>
        <div class="w-5/6 bg-gray-200"></div>
      </div>
      <div class="flex flex-col">
        <span class="leading-7 font-semibold text-gray-900 text-sm"
          >{{title}}</span
        >
        <span class="leading-6 text-gray-600 text-sm font-medium">{{subtitle}}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    url: String,
  }
}
</script>

<style scoped>
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