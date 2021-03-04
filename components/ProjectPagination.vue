<template>
  <div class="project-pagination card">
    <nuxt-link :to="next.path" v-if="next" class="project-pagination-element">
      <h5 class="title">{{ next.title }}</h5>
      <p class="subtitle">Newer<arrow-left-icon /></p>
    </nuxt-link>
    <nuxt-link
      :to="previous.path"
      v-if="previous"
      class="project-pagination-element"
    >
      <h5 class="title condensed">{{ previous.title }}</h5>
      <p class="subtitle">Older<arrow-right-icon /></p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    previous: Object,
    next: Object,
  },
};
</script>

<style lang="scss" scoped>
.project-pagination {
  &-element {
    transition: background-color 0.2s;
    width: 100%;
    @include padding(24px 32px);

    &:not(:last-child) {
      border-right: 1px solid rgba(var(--grey-200), 1);
    }

    &:hover {
      background-color: rgba(var(--grey-000), 1);
    }

    p {
      font-weight: 500;
      @include flex(space-between, center, row);
    }
  }
}
</style>