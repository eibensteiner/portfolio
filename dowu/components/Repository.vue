<template>
  <div class="card repository">
    <a class="repository-heading">
      <span>{{ user }}</span> /
      <span>{{ repository }}</span>
    </a>
    <p class="repository-content">
      {{ description }}
    </p>
    <SimpleButton :text="'View more on GitHub'" />
  </div>
</template>

<script lang="ts">
export default {
  props: ["user", "repository", "description"],
};
</script>

<style lang="scss" scoped>
.repository {
  text-align: left;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  &:not(:last-child) {
    .button {
      display: none;
    }
  }

  &-heading {
    span {
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;

      &:last-child {
        color: var(--white);
      }
    }
  }

  &-content {
    margin: 8px 0 0 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>