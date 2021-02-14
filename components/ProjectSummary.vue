<template>
  <div class="project-summary">
    <div class="project-summary-element">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.1" cx="12" cy="12" r="12" fill="#1B1F23" />
        <path
          d="M12.5047 5.75001L18.0615 15.375C18.1127 15.4637 18.1397 15.5643 18.1397 15.6667C18.1397 15.7691 18.1127 15.8697 18.0615 15.9583C18.0103 16.047 17.9367 16.1207 17.848 16.1719C17.7593 16.2231 17.6588 16.25 17.5564 16.25H6.44269C6.3403 16.25 6.23971 16.2231 6.15103 16.1719C6.06236 16.1207 5.98872 16.047 5.93752 15.9583C5.88633 15.8697 5.85937 15.7691 5.85938 15.6667C5.85938 15.5643 5.88633 15.4637 5.93753 15.375L11.4944 5.75001C11.5456 5.66134 11.6192 5.58771 11.7079 5.53652C11.7965 5.48532 11.8971 5.45837 11.9995 5.45837C12.1019 5.45837 12.2025 5.48532 12.2912 5.53652C12.3799 5.58771 12.4535 5.66134 12.5047 5.75001ZM11.4162 13.3333V14.5H12.5829V13.3333H11.4162ZM11.4162 9.25002V12.1667H12.5829V9.25002H11.4162Z"
          fill="#1B1F23"
        />
      </svg>

      <h3 class="title">Problem</h3>
      <p class="subtitle">
        {{ problem }}
      </p>
    </div>
    <div class="project-summary-element">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.1" cx="12" cy="12" r="12" fill="#1B1F23" />
        <path
          d="M10.6665 14.1147L16.7945 7.98602L17.7378 8.92869L10.6665 16L6.42383 11.7574L7.3665 10.8147L10.6665 14.1147Z"
          fill="#1B1F23"
        />
      </svg>

      <h3 class="title">Solution</h3>
      <p class="subtitle">
        {{ solution }}
      </p>
    </div>
    <div class="project-summary-element">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.1" cx="12" cy="12" r="12" fill="#1B1F23" />
        <path
          d="M12.6665 9.21869V17.3334H11.3331V9.21869L7.75712 12.7947L6.81445 11.852L11.9998 6.66669L17.1851 11.852L16.2425 12.7947L12.6665 9.21869Z"
          fill="#1B1F23"
        />
      </svg>

      <h3 class="title">My Role</h3>
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
  margin-top: 40px;
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