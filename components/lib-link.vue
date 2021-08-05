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
    box-shadow: rgb(17, 25, 36, 0.2) 0px 1px 0px;
    @apply text-gray-800 transition-colors hover:text-black cursor-pointer;
}
</style>