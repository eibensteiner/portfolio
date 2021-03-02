<template>
  <footer class="footer">
    <div class="footer-left">
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">GitHub</a>
      <a href="#">Dribbble</a>
      <a href="#">Mail</a>
    </div>
    <p class="footer-right">
      You can find the <a>source code of this website</a> here if you want to
      see how i built it. Due to it's privacy friendly design, it isn't tracking
      your behaviour. <br /><br />
      You can <a>contact me</a> anytime if you got an interesting opportunity
      for me. Here's my <a>my resume</a>.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 0 0 136px 0;
  @include flex(space-between, flex-start, row);
  @include padding(0 32px);
  @include viewport(sm) {
    margin-bottom: 32px;
  }

  &-left {
    max-width: 112px;
    width: 100%;
    margin-right: 40px;
    @include flex(flex-start, flex-start, column);

    & > * {
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  &-right {
    width: 100%;
    margin: 0;
    @include viewport(sm) {
      display: none;
    }

    & > * {
      display: inline-block;
    }
  }
}
</style>