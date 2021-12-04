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
  @apply inline-flex text-sm bg-slate-dark-4 rounded-2xl h-6 px-2 font-sans text-slate-dark-11;
}
</style>