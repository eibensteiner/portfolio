<template>
  <section class="section">
    <div class="section-heading">
      <div class="section-heading-left">
        <h2>{{ heading }}</h2>
        <p>{{ subheading }}</p>
      </div>
      <div class="section-heading-right">
        <span v-if="date">
          <span>{{ startDate }}</span> -
          <span>{{ endDate }}</span>
        </span>
      </div>
    </div>
    <div class="section-content">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    date: {
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
}

.section-heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &-left {
    width: 100%;
    max-width: 440px;
    text-align: left;
  }

  &-right {
    text-align: right;
  }
}

.section-content {
  margin-top: 48px;
}
</style>