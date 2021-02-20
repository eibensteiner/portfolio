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
      The copyright on this website belongs to me basically. If you want to see
      how I built it, <a>here is the source code</a>. Find more details in the
      privacy policy. <br /><br />
      You can contact me if you got an interesting opportunity for me. Here's my
      <a>my resume</a>.<br /><br />
      Hit
      <span class="badge-group"
        ><span class="badge">⌘</span><span class="badge">p</span></span
      >
      to find the secret party.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 64px 0 136px 0;
  @include flex(space-between, flex-start, row);
  @include padding(0 32px);

  &-left {
    max-width: 160px;
    width: 100%;
    margin-right: 64px;
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

    & > * {
      display: inline-block;
    }
  }
}
</style>