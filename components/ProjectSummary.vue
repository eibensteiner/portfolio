<template>
  <div class="project-summary card">
    <div class="project-summary-element">
      <icon-bolt :size="'lg'" :color="'grey-600'" />
      <h5 class="title condensed">Problem</h5>
      <p class="subtitle">
        {{ problem }}
      </p>
    </div>
    <div class="project-summary-element">
      <icon-check-badge :size="'lg'" :color="'grey-600'" />
      <h5 class="title condensed">Solution</h5>
      <p class="subtitle">
        {{ solution }}
      </p>
    </div>
    <div class="project-summary-element">
      <icon-puzzle :size="'lg'" :color="'grey-600'" />
      <h5 class="title condensed">My Role</h5>
      <p class="subtitle">
        {{ role }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    problem: String,
    solution: String,
    role: String,
  },
};
</script>

<style lang="scss" scoped>
.project-summary {
  margin-top: 32px;

  &-element {
    width: 33.33%;
    @include padding(32px 32px 24px 32px);

    &:not(:last-child) {
      border-right: 1px solid rgba(var(--grey-200), 1);
    }

    .icon {
      margin-bottom: 8px;
    }
  }
}
</style>