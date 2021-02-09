<template>
  <header class="header">
    <div class="header-left">
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <div class="header-right">
      <template v-if="!isNested">
        <NuxtLink to="/">Work</NuxtLink>
        <NuxtLink to="/thoughts">Thoughts</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </template>
      <template v-if="isNested">
        <NuxtLink to="/about">Go Back</NuxtLink>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    isNested: false,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: $nudge * 94;
  margin-bottom: $nudge * 10;
  @include flex(space-between, flex-end, row);

  &-left {
    max-width: $nudge * 46;
  }

  &-right {
    & > * {
      margin-left: $nudge * 3;
    }
  }
}
</style>