<template>
  <header class="header">
    <div class="header-left">
      <h1 class="title">{{ title }}</h1>
      <p v-if="subtitle.text">{{ subtitle.text }}</p>
      <p v-if="subtitle.date && subtitle.url">
        {{ formatDate(subtitle.date) }},
        <a :href="'https://' + subtitle.url" target="_blank">
          {{ subtitle.url }}
        </a>
      </p>
    </div>
    <div class="header-right">
      <template v-if="$route.name === 'index' || $route.name === 'about'">
        <nuxt-link to="/">Work</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </template>
      <template v-if="$route.name != 'index' && $route.name != 'about'">
        <nuxt-link to="/">
          <arrow-left-icon />
          Go Back
        </nuxt-link>
      </template>
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