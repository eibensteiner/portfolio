<template>
    <a class="link" :href="href" :class="isTitle ? 'font-semibold' : 'font-medium'" target="_blank" rel="noopener">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: {
        href: String,
        isTitle: Boolean
    }
}
</script>

<style scoped>
.link {
    box-shadow: rgb(255, 255, 255, 0.1) 0px 1.5px 0px;
    @apply text-slate-dark-12 transition-colors hover:text-white cursor-pointer leading-5;
}
</style>