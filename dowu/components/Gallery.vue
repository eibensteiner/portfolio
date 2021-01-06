<template>
  <div class="gallery">
    <img
      v-for="item in content"
      :key="item.src"
      :class="['img', active === item.src ? 'active' : '']"
      :src="require(`~/assets/img/${item.src}`)"
    />
    <div class="pagination">
      <button
        v-for="item in content"
        :key="item.src"
        @click="active = item.src"
        :class="[active === item.src ? 'active' : '']"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      src: String,
    },
  },
  data() {
    return {
      active: this.content[0].src, // Set first item of a array based on the entered props active
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  height: 472px;
}

.img {
  width: 100%;
  object-fit: cover; // emulates positioning of background-image
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transition: visibility, opacity 0.2s;
  position: absolute;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}

.pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  @include flex(center, center, row);

  button {
    background-color: var(--midgrey);
    appearance: none;
    margin: 4px;
    border: none;
    max-width: 6px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    cursor: pointer;
    padding: 0;

    &.active {
      background-color: var(--white);
    }
  }
}
</style>