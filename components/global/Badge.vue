<template>
  <span class="inline-flex bg-gray-200 text-black text-sm leading-6 rounded-md px-1 font-medium mx-1">{{ text }}</span>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>