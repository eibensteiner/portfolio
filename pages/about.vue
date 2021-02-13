<template>
  <main class="main">
    <Header :title="'Dominik Wurm'" :subtitle="'Product Designer at Blockpit'">
    </Header>
    <div class="container">
      <img src="@/assets/img/about/sarah.jpg"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
img {
  position: relative;
  border-radius: 8px;
  height: 416px;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  @include flex(space-between, flex-start, row);
}
</style>