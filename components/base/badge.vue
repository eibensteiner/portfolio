<template>
    <span class="badge">{{label}}</span>
</template>

<script>
export default {
    props: {
        label: String
    }
}
</script>

<style scoped>
.badge {
  @apply inline-flex text-sm bg-gray-200 rounded-2xl h-6 px-2 font-normal text-gray-600 tracking-normal;
}
</style>