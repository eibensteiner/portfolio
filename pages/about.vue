<template>
  <main class="main">
    <Header :title="'Dominik Wurm'" :subtitle="'Product Designer at Blockpit'">
    </Header>
    <div class="container">
      <img src="@/assets/img/about/sarah.jpg" />
      <div class="container">
        <p>
          Explore any website through a lightweight and centralized navigation
          system. Explore any website through a lightweight and centralized
          navigation system. Explore any website through a lightweight and
          centralized navigation system. Explore any website through a
          lightweight and centralized navigation system. Explore any website
          through a lightweight and centralized navigation system
        </p>
      </div>
      <carousel />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  .container {
    margin-top: 64px;
    @include padding(0 32px);
  }
}

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