<template>
  <section class="section">
    <div class="title">
      <h1>{{ title }}</h1>
      <slot name="title" />
    </div>
    <div class="content">
      <div class="content-item" v-for="item in content" :key="item.question">
        <h4>{{ item.question }}</h4>
        <p v-html="item.answer"></p>
      </div>
      <slot name="content" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      question: String,
      answer: null
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  margin-bottom: 48px;
  @include flex(space-between, initial, initial);

  .title {
    max-width: 160px;
    width: 100%;
    margin-right: 64px;
    @include flex(flex-start, flex-start, column);

    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  .content {
      width: 100%;

      &-item:not(:first-child) {
        margin-top: 32px;
      }
  }
}
</style>