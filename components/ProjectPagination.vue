<template>
  <div class="project-pagination">
    <nuxt-link :to="previous.path" v-if="previous" class="project-pagination-element">
      <h3 class="title">{{ previous.title }}</h3>
      <p class="subtitle">Previous</p>
    </nuxt-link>
    <nuxt-link :to="next.path" v-if="next" class="project-pagination-element">
      <h3 class="title">{{ next.title }}</h3>
      <p class="subtitle">Next</p>
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
  background-color: rgba(var(--white), 1);
  border: 1px solid rgba(var(--grey200), 1);
  border-radius: 6px;
  width: 100%;
  overflow: hidden;
  @include flex(center, center, row);

  &-element {
    transition: background-color .2s;
    width: 100%;
    @include padding(32px);

    &:not(:last-child) {
      border-right: 1px solid rgba(var(--grey200), 1);
    }

    &:hover {
        background-color: rgba(var(--grey000), 1);
    }
  }
}
</style>