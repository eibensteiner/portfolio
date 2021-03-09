<template>
  <main class="main">
    <Header
      :title="
        'I\'m Dominik, a coding Designer from Austria, striving for visual clarity, simplicity and minimalism.'
      "
    >
    </Header>
    <div class="container-outer">
      <hr />
      <div class="container-inner">
        <p>
          Since 2018 I'm working as a Product & Brand Designer at
          <a
            href="https://blockpit.io"
            target="_blank"
            rel="noopener noreferrer"
            >Blockpit</a
          >, supporting thousands of Users with their crypto taxes. As one of
          the very first employees I had the chance to shape the overall design
          strategy of the startup. <br /><br />
          Before that I was a UX Engineer at
          <a
            href="https://storyclash.com"
            target="_blank"
            rel="noopener noreferrer"
            >Storyclash</a
          >
          and graduated from the
          <a
            href="https://www.fh-ooe.at/en/hagenberg-campus/"
            target="_blank"
            rel="noopener noreferrer"
            >University of Applied Sciences Upper Austria</a
          >.
        </p>
      </div>
      <hr />
      <div class="container-inner">
        <h5 class="condensed">Selected Work</h5>
        <p>
          You can find some of my recent work below. I'm currently working
          intensively to transform projects i worked on into case studies.
        </p>
        <nuxt-link
        :to="{ name: 'projects-slug', params: { slug: project.slug } }"
        :class="['projects-element', project.locked ? 'locked' : '']"
        v-for="project of projects"
        :key="project.slug"
      >
        <div class="overlay" v-if="!project.locked">
          <icon-arrow-right :color="'grey-600'" />
        </div>
        <div class="img" :style="{ backgroundColor: '#' + project.color }">
          <img :src="require(`~/assets/img/${project.img}`)" />
          <icon-lock v-if="project.locked" :color="'white'" />
        </div>
        <div class="description">
          <h5 class="title condensed">
            {{ project.title }}
          </h5>
          <p class="subtitle">
            {{ project.subtitle }}
          </p>
        </div>
      </nuxt-link>
      </div>
      <hr />
      <div class="container-inner">
        <h5 class="condensed">My Thoughts</h5>
        <p>
          Besides my work I'll try to write down my thoughts. I've just started but I'll do my very best to keep things updated.
        </p>
        <nuxt-link
          :to="{ name: 'thoughts-slug', params: { slug: thought.slug } }"
          :class="[thought.locked ? 'locked' : '']"
          v-for="thought of thoughts"
          :key="thought.slug"
          >{{ thought.title }}
          <icon-arrow-right :color="'grey-600'" />
        </nuxt-link>
      </div>
      <hr />
    </div>
  </main>
</template>

<script>
export default {
  // gets markdown files from /content
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    const thoughts = await $content("thoughts", params.slug)
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
      thoughts,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-inner {
  @include padding(0 32px);
}

::v-deep .header {
  &-left {
    max-width: none !important;
  }
}

.projects {
  margin-top: 48px;
  @include padding(0 32px);
  @include viewport(sm) {
    margin-top: 32px;
  }

  &-element {
    height: 100%;
    transition: background-color 0.2s;
    position: relative;
    @include flex(flex-start, center, row);

    &:not(:first-child) {
      margin-top: 24px;
      @include viewport(sm) {
        margin-top: 8px;
      }
    }

    &:hover {
      .overlay {
        opacity: 1;
      }

      .img {
        transform: scale(1.03);
      }

      .icon {
        transform: translateX(0px);
      }
    }

    &.locked {
      pointer-events: none;
      user-select: none;

      .description {
        opacity: 0.3;
        filter: blur(3px);
      }

      .img {
        img {
          filter: blur(3px);
        }
      }
    }

    .title {
      @include flex(flex-start, center, row);
    }

    .subtitle {
      @include viewport(sm) {
        display: none;
      }
    }

    .img {
      min-width: 112px;
      width: 112px;
      height: 88px;
      border-radius: 4px;
      transition: transform 0.2s;
      position: relative;
      margin-right: 40px;
      @include flex(center, center, row);
      @include viewport(sm) {
        display: none;
      }

      .icon {
        width: 24px;
        height: 24px;
        background-color: rgba(var(--black), 1);
        border: 2px solid rgba(var(--grey-000), 1);
        border-radius: 6px;
        position: absolute;
        right: -4px;
        bottom: -4px;
        transform: rotate(6deg);
        @include padding(4px);
      }
    }
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 200px;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s;
    background: linear-gradient(
      to right,
      transparent,
      rgba(var(--grey-000), 0.9),
      rgba(var(--grey-000), 1)
    );
    @include flex(flex-end, center, row);
    @include viewport(sm) {
      opacity: 1;
    }

    .icon {
      transition: transform 0.2s;
      transform: translateX(-4px);
    }
  }
}
</style>
