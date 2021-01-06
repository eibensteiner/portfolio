<template>
  <NuxtLink :to="to">
    <section class="section">
      <Header :title="heading" :subtitle="subheading" :variant="'second'">
        <template v-slot:additional v-if="date">
          <span class="date">
            <span>{{ date.startDate }}</span> -
            <span>{{ date.endDate }}</span>
          </span>
        </template>
      </Header>
      <div class="section-content">
        <div class="img variant-first">
          <img :src="require(`~/assets/img/${img}`)" />
        </div>
      </div>
    </section>
  </NuxtLink>
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
      startedAt: {
        type: String,
        required: true,
      },
      endedAt: {
        type: String,
        required: true,
      },
    },
    to: {},
    img: {},
  },
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
}

::v-deep .date {
  span {
    &:last-child {
      color: var(--white);
    }
  }
}
</style>