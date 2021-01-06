<template>
  <section class="section">
    <div class="title">
      <h1>{{ title }}</h1>
      <slot name="title" />
    </div>
    <div class="content">
      <p v-html="subtitle"></p>
      <slot name="content" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  margin-bottom: 48px;
  @include flex(space-between, initial, initial);

  .title {
    @include flex(initial, center, initial);

    & > *:not(:last-child) {
      margin-right: 16px;
    }
  }

  .content {
    max-width: 440px;
    width: 100%;
  }
}
</style>