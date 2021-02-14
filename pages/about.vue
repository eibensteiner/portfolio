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
      <div class="container grid">
        <div class="about-left">
          <h3 class="title">My Experience</h3>
          <p class="subtitle">
            Explore any website through a lightweight and centralized navigation
            system. Explore any website through a lightweight and centralized
            navigation system. Explore any website through a lightweight and
            centralized navigation system. Explore any website through a
            lightweight and centralized navigation system. Explore any website
            through a lightweight and centralized navigation system
          </p>
        </div>
        <div class="about-right">
          <h3 class="title">My Education</h3>
          <p class="subtitle">
            Explore any website through a lightweight and centralized navigation
            system. Explore any website through a lightweight and centralized
            navigation system. Explore any website through a lightweight and
            centralized navigation system. Explore any website through a
            lightweight and centralized navigation system. Explore any website
            through a lightweight and centralized navigation system
          </p>
        </div>
      </div>
    </div>
    <project-summary/>
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