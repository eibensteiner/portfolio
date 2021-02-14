<template>
  <div class="project-pagination">
    <div class="project-pagination-element">
      <h3 class="title">Problem</h3>

      <p class="subtitle">Previous</p>
    </div>
    <div class="project-pagination-element">
      <h3 class="title">Solution</h3>
      <p class="subtitle">Next</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.project-pagination {
  background-color: rgba(var(--white), 1);
  border: 1px solid rgba(var(--grey200), 1);
  border-radius: 6px;
  width: 100%;
  @include flex(center, center, row);

  &-element {
    width: 100%;
    @include padding(32px);

    &:not(:last-child) {
      border-right: 1px solid rgba(var(--grey200), 1);
    }
  }
}
</style>