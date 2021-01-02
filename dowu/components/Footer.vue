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
      how I built it, here is a <a>GitHub link</a> to the repository. Find more details in the privacy policy.
      <br /><br />
      I’m currently not looking for a new job, but here is <a>my resume</a> if you’re
      into that.
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  &-left {
    max-width: 152px;
    width: 100%;
    display: flex;
    flex-direction: column;

    a {
      line-height: 32px;
      font-size: 14px;
      font-weight: 600;
    }
  }

  &-right {
    width: 100%;
    margin: 0;
  }
}
</style>