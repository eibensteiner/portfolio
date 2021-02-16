<template>
  <div class="project-summary">
    <div class="project-summary-element">
      <hooper ref="carousel" @slide="updateCarousel">
        <slide
          v-for="slide in slides"
          :key="slide.length"
          :class="isLastSlide ? 'blurred' : ''"
        >
          <h3 class="title">{{ slide.title }}</h3>
          <p class="subtitle">{{ slide.subtitle }}</p>
        </slide>
      </hooper>

      <div class="pagination">
        <arrow-left @onclick="slidePrev" />
        <span>
          <span>{{ slideIndex }}</span>
          of 1.000
        </span>
        <arrow-right
          @onclick="slideNext"
          :class="isLastSlide ? 'disabled' : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  props: {
    slides: Array,
  },
  data() {
    return {
      slideIndex: 0,
      isLastSlide: false,
    };
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.slideIndex = payload.currentSlide + 1;
      this.checkIfLastSlide();
    },
    checkIfLastSlide() {
      if (this.slideIndex === this.slides.length) {
        this.isLastSlide = true;
      } else this.isLastSlide = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.project-summary {
  margin-top: 64px;
  background-color: rgba(var(--white), 1);
  border: 1px solid rgba(var(--grey200), 1);
  border-radius: 6px;
  width: 100%;
  overflow: hidden;
  @include flex(center, center, row);

  &-element {
    width: 100%;
    @include padding(32px);

    &:not(:last-child) {
      border-right: 1px solid rgba(var(--grey200), 1);
    }
  }
}

.pagination {
  user-select: none;
  font-size: 18px;
  margin-top: 32px;
  @include flex(flex-start, center, row);

  & > span {
    margin: 0 16px;

    span {
      color: rgba(var(--black), 1);
    }
  }
}

::v-deep .hooper {
  height: auto;

  &-sr-only {
    display: none;
  }

  &-track {
    display: flex;
  }
}

.hooper-slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
.hooper-progress {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background-color: #efefef;
}
.hooper-progress-inner {
  height: 100%;
  background-color: #4285f4;
  transition: 300ms;
}
.hooper-pagination {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  padding: 5px 10px;
}
.hooper-indicators {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #4285f4;
}
.hooper-indicator {
  margin: 0 2px;
  width: 12px;
  height: 4px;
  border-radius: 4px;
  border: none;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
}
.hooper-pagination.is-vertical {
  bottom: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hooper-pagination.is-vertical .hooper-indicators {
  flex-direction: column;
}
.hooper-pagination.is-vertical .hooper-indicator {
  width: 6px;
}
.hooper-next,
.hooper-prev {
  background-color: transparent;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next.is-disabled,
.hooper-prev.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.hooper-next {
  right: 0;
}
.hooper-prev {
  left: 0;
}
.hooper-navigation.is-vertical .hooper-next {
  top: auto;
  bottom: 0;
  transform: initial;
}
.hooper-navigation.is-vertical .hooper-prev {
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  transform: initial;
}
.hooper-navigation.is-rtl .hooper-prev {
  left: auto;
  right: 0;
}
.hooper-navigation.is-rtl .hooper-next {
  right: auto;
  left: 0;
}
.hooper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.hooper * {
  box-sizing: border-box;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper.is-vertical .hooper-track {
  flex-direction: column;
  height: 200px;
}

.hooper.is-rtl {
  direction: rtl;
}

.hooper-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>