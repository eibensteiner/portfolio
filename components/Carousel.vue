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
        <arrow-left
          @onclick="slidePrev"
          :class="isFirstSlide ? 'disabled' : ''"
        />
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
      isFirstSlide: true,
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
      this.checkIfFirstSlide();
      this.checkIfLastSlide();
    },
    checkIfLastSlide() {
      if (this.slideIndex === this.slides.length) {
        this.isLastSlide = true;
      } else this.isLastSlide = false;
    },
    checkIfFirstSlide() {
      if (this.slideIndex === 1) {
        this.isFirstSlide = true;
      } else this.isFirstSlide = false;
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
  @include padding(32px);
  @include flex(center, center, row);

  &:focus-within {
    outline: -webkit-focus-ring-color auto 1px;
  }

  &-element {
    width: 100%;

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
  &:focus {
    outline: none;
  }

  &-sr-only {
    display: none;
  }

  &-track {
    display: flex;
    margin: 0;
    padding: 0;
  }

  &-slide {
    list-style: none;
    opacity: 1;
    flex-shrink: 0;
    transition: opacity 0.2s;
    transition-delay: 0.1s;

    &:not(.is-active) {
      opacity: 0;
    }
  }
}
</style>