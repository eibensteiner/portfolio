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
      how I built it, here is a <a>GitHub link</a> to the repository. Find more
      details in the privacy policy. <br /><br />
      I’m currently not looking for a new job, but here is <a>my resume</a> if
      you’re into that.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 80px 0 136px 0;
  @include flex(space-between, flex-start, row);
  @include padding(0 40px);

  &-left {
    max-width: 160px;
    width: 100%;
    margin-right: 64px;
    @include flex(flex-start, flex-start, column);

    & > * {
      font-weight: 600;

      &:not(:last-child) {
      margin-bottom: 8px;

      }
    }
  }

  &-right {
    width: 100%;
    margin: 0;
  }
}
</style>