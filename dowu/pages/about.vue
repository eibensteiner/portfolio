<template>
  <main class="main">
    <Header :title="'Dominik Wurm'" :subtitle="'Product Designer at Blockpit'">
    </Header>
    <Gallery
      :content="[
        {
          src: 'about/lake.jpg',
        },
        {
          src: 'about/sarah.jpg',
        },
      ]"
    />
  </main>
</template>