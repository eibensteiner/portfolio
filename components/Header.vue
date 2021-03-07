<template>
  <header class="header">
    <div class="header-left">
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle && subtitle.text">{{ subtitle.text }}</p>
      <p v-if="subtitle && subtitle.date&& !subtitle.url">{{ formatDate(subtitle.date) }}</p>
      <p v-if="subtitle && subtitle.date && subtitle.url">
        {{ formatDate(subtitle.date) }},
        <a :href="'https://' + subtitle.url" target="_blank"  rel="noopener noreferrer">
          {{ subtitle.url }}
        </a>
      </p>
    </div>
    <div
      class="header-right"
      v-if="$route.name != 'index' && $route.name != 'about'"
    >
      <nuxt-link to="/">
        <arrow-left-icon />
        Go Back
      </nuxt-link>
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
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin: 136px 0 64px 0;
  @include flex(space-between, flex-end, row);
  @include padding(0 32px);
  @include viewport(sm) {
    margin-top: 32px;
  }

  &-left {
    max-width: $nudge * 46;
  }

  &-right {
    @include flex(center, center, row);

    & > * {
      margin-left: $nudge * 3;
      line-height: 24px;
      @include flex(center, center, row);

      &:not(.nuxt-link-exact-active) {
        color: rgba(var(--grey-600), 1);
      }

      .icon {
        margin-right: 12px;
      }
    }
  }
}
</style>