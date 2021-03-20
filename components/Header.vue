<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <div
      class="header-meta"
      v-if="$route.name != 'index' && $route.name != 'about'"
    >
      <nuxt-link to="/">
        <icon-arrow-left :color="'grey-600'" />
        Go Back
      </nuxt-link>
      <p v-if="subtitle && subtitle.text">{{ subtitle.text }}</p>
      <p v-if="subtitle && subtitle.date && !subtitle.url">
        {{ formatDate(subtitle.date) }}
      </p>

      <p v-if="subtitle && subtitle.date && subtitle.url">
        {{ formatDate(subtitle.date) }},
        <a
          :href="'https://' + subtitle.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ subtitle.url }}
        </a>
      </p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: {
      text: String,
      url: String,
      date: Date,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin-top: 136px;
  @include padding(0 32px);
  @include viewport(sm) {
    margin-top: 32px;
  }

  &-meta {
    margin-top: 8px;
    @include flex(flex-start, flex-end, row);

    & > * {
      white-space: nowrap;

      &:not(:last-child) {
        margin-right: 16px;
        padding-right: 16px;
        border-right: 1px solid rgba(var(--grey-200), 1);
      }
    }

    & > a {
      .icon {
        margin: 0 12px 0 0 !important;
      }
    }
  }
}
</style>
