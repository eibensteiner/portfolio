<template>
  <div class="gallery">
    <div
      class="img tabcontent"
      :style="`background-image: url('https://images.unsplash.com/photo-1588065394015-68bf7e40738d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')`"
      v-if="active === 1"
    ></div>
    <div
      class="img tabcontent"
      :style="`background-image: url('https://images.unsplash.com/photo-1588065394015-68bf7e40738d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')`"
      v-if="active === 2"
    ></div>
    <div
      class="img tabcontent"
      :style="`background-image: url('https://images.unsplash.com/photo-1588065394015-68bf7e40738d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')`"
      v-if="active === 3"
    ></div>
    <div class="pagination">
      <button @click="active = 1" :class="[active === 1 ? 'active' : '']" />
      <button @click="active = 2" :class="[active === 2 ? 'active' : '']" />
      <button @click="active = 3" :class="[active === 3 ? 'active' : '']" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  height: 440px;
}

.img {
  width: 100%;
  background-size: cover;
  background-position: center;
  margin: 0;
}

.pagination {
  margin-top: 20px;
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