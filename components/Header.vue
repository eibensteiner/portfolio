<template>
  <header>
    <h1 class="text-2xl font-semibold mb-8 leading-10">{{ title }}</h1>
    <div
      v-if="$route.name != 'index' && $route.name != 'about'"
    >
      <nuxt-link to="/">
        <icon-arrow-left :color="'grey-600'" />
        Go Back
      </nuxt-link>
      <span v-if="subtitle && subtitle.text">{{ subtitle.text }}</span>
      <span v-if="subtitle && subtitle.date">{{ formatDate(subtitle.date) }}</span>
      <span v-if="subtitle && subtitle.period">{{ subtitle.period }}</span>
      <span v-if="subtitle && subtitle.role">{{ subtitle.role }}</span>
      <a
        v-if="subtitle && subtitle.url"
        :href="'https://' + subtitle.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ subtitle.url }}
      </a>

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
    },
  },
};
</script>
