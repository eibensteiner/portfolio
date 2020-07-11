<template>
  <a class="avatar" href="mailto:me@dowu.xyz">
    <img src="/img/me.jpg" alt="Dominik" />
    <svg class="icon-pulse loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle class="pulse-outer" opacity=".1" cx="12" cy="12" r="8"/>
      <circle class="pulse-outer-2" opacity="0" cx="12" cy="12" r="8"/>
      <circle class="pulse-inner" cx="12" cy="12" r="2"/>
    </svg>
  </a>
</template>

<script>
  export default {
    name: "LibAvatar"
  }
</script>

<style scoped lang="scss">
  .avatar {
    display: block;
    position: relative;
    transition: all .2s;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
    }
  }

  img {
    max-width: $size*12;
    border-radius: get($border-radius, lg);
  }

  .icon-pulse {
    position: absolute;
    right: -22px;
    bottom: -22px;
    display: block;
    margin: 0 auto;
    height: 72px;
    width: 72px;
  }
  .icon-pulse circle {
    transform-origin: 50% 50%;
  }

  .icon-pulse.loading{
    fill: #54e8cc;
  }

  .icon-pulse.loading .pulse-outer, .icon-pulse.loading .pulse-outer-2{
    animation:         pulseAnim 4s ease infinite;
  }
  .icon-pulse.loading .pulse-outer-2{
    animation-delay: 2s;
  }

  @keyframes pulseAnim {
    0%    { transform: scale(0); opacity: .1; }
    50%   { transform: scale(1); opacity: .25; }
    100%  { transform: scale(1.5); opacity: 0; }
  }
</style>