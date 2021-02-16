<template>
  <div class="project-summary">
    <div class="project-summary-element">
      <h3 class="title">I love dogs (way) more than cats</h3>
      <p class="subtitle">
        I’m currently not looking for a new job, but here is my resume if you’re
        into that. If you want to see how I built it, here is a GitHub link to
        the repository. I’m currently not looking for a new job, but here is my
        resume if you’re into that.
      </p>
      <div class="pagination">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.52398 9.1666H16.6673V10.8333H6.52398L10.994 15.3033L9.81565 16.4816L3.33398 9.99993L9.81565 3.51826L10.994 4.6966L6.52398 9.1666Z"
            fill="#586069"
          />
        </svg>
        <span><span>5</span> of 1.000</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4773 9.1666L9.00732 4.6966L10.1857 3.51826L16.6673 9.99993L10.1857 16.4816L9.00732 15.3033L13.4773 10.8333H3.33398V9.1666H13.4773Z"
            fill="#586069"
          />
        </svg>
      </div>
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
  margin-top: 64px;
  background-color: rgba(var(--white), 1);
  border: 1px solid rgba(var(--grey200), 1);
  border-radius: 6px;
  width: 100%;
  overflow: hidden;
  @include flex(center, center, row);

  &-element {
    width: 100%;
    @include padding(32px);

    &:not(:last-child) {
      border-right: 1px solid rgba(var(--grey200), 1);
    }
  }
}

.pagination {
  font-size: 18px;
  margin-top: 32px;
  @include flex(flex-start, center, row);

  & > span {
    margin: 0 16px;

    span {
      color: rgba(var(--black), 1);
    }
  }
}
</style>