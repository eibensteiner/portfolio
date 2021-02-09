<template>
  <NuxtLink :to="to" class="project" :style="{ backgroundColor: '#' + color }">
    <div class="text">
      <h3 class="title">{{ title }}</h3>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <img :src="require(`~/assets/img/${img}`)" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    color: String,
    to: {},
    img: {},
  },
};
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  border-radius: 4px;
  width: calc(50% - 16px);
  margin: 8px;

  img {
    margin-top: 40px;
    max-width: 100%;
    display: block;
  }
}

.text {
  width: 100%;
  @include padding(40px);
}
</style>