<template>
  <div class="container">
    <Header
      :title="'Because we are all humans'"
      :subtitle="'I’m Dominik, a Coding Designer from Austria and a human like you. I love minimal & functional Interfaces. <br/><br/> For the past few years I have worked for several Startups as a Code savvy designer. I had the chance to build products from the ground up<br/><br/>I’m Dominik, a Coding Designer from Austria and a human like you. I love minimal & functional Interfaces. <br/><br/> For the past few years I have worked for several Startups as a Code savvy designer. I had the chance to build products from the ground up<br/><br/>I’m Dominik, a Coding Designer from Austria and a human like you. I love minimal & functional Interfaces. <br/><br/> For the past few years I have worked for several Startups as a Code savvy designer. I had the chance to build products from the ground up'"
    >
      <template v-slot:title>
        <SimpleButton :text="'Contact me'" />
      </template>
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
  </div>
</template>