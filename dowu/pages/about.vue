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
    <Gallery>
      <div title="Tab 1">Hello From Tab 1</div>
      <div title="Tab 2">Hello From Tab 2</div>
      <div title="Tab 3">Hello From Tab 3</div>
      <div title="Tab 4">Hello From Tab 4</div>
    </Gallery>
  </div>
</template>