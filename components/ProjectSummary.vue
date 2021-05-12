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