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
          navigation system.

          <br /><br />

          Explore any website through a lightweight and centralized navigation
          system. Explore any website through a lightweight and centralized
          navigation system. Explore any website through a lightweight and
          centralized navigation system
        </p>
      </div>
      <carousel :slides="slides" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { title: "I love dogs (way) more than cats", subtitle: "I’m currently not looking for a new job, but here is my resume if you’re into that. If you want to see how I built it, here is a GitHub link to the repository. Im currently not looking for a new job, but here is my resume if you’re into that." },
        { title: "Another super title", subtitle: "I’m currently not looking for a new job, but here is my resume if you’re into that. If you want to see how I built it, here is a GitHub link to the repository. Im currently not looking for a new job, but here is my resume if you’re into that." },
      ],
    };
  },
};
</script>

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