<template>
  <div class="project-pagination">
    <nuxt-link
      :to="previous.path"
      v-if="previous"
      class="project-pagination-element"
    >
      <h3 class="title">{{ previous.title }}</h3>
      <p class="subtitle">Previous</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </nuxt-link>
    <nuxt-link :to="next.path" v-if="next" class="project-pagination-element">
      <h3 class="title">{{ next.title }}</h3>
      <p class="subtitle">Next</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
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
    transition: background-color 0.2s;
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