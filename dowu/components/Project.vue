<template>
  <NuxtLink
    :to="to"
    :class="['project', setClassBasedOnContrast(color)]"
    :style="{ backgroundColor: '#' + color }"
  >
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
  methods: {
    setClassBasedOnContrast(color) {
      color = color.replace("#", "");
      let r = parseInt(color.substr(0, 2), 16);
      let g = parseInt(color.substr(2, 2), 16);
      let b = parseInt(color.substr(4, 2), 16);
      let value = (r * 299 + g * 587 + b * 114) / 1000;
      return value >= 128 ? "background-light" : "background-dark";
    },
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
    width: 100%;
    display: block;
  }

  &.background-light {
    h3 {
      color: var(--black);
    }

    p {
      color: var(--grey600);
    }
  }

  &.background-dark {
    h3 {
      color: var(--white);
    }

    p {
      color: var(--grey400);
    }
  }
}

.text {
  width: 100%;
  @include padding(40px);
}
</style>