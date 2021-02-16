<template>
  <div class="project-summary">
    <div class="project-summary-element">
      <hooper ref="carousel" @slide="updateCarousel">
        <slide>
          <h3 class="title">I love dogs (way) more than cats</h3>
          <p class="subtitle">
            I’m currently not looking for a new job, but here is my resume if
            you’re into that. If you want to see how I built it, here is a
            GitHub link to the repository. I’m currently not looking for a new
            job, but here is my resume if you’re into that.
          </p>
        </slide>
        <slide>
          <h3 class="title">I love dogs (way) more than cats</h3>
          <p class="subtitle">
            I’m currently not looking for a new job, but here is my resume if
            you’re into that. If you want to see how I built it, here is a
            GitHub link to the repository. I’m currently not looking for a new
            job, but here is my resume if you’re into that.
          </p>
        </slide>
        <slide>
          <h3 class="title">I love dogs (way) more than cats</h3>
          <p class="subtitle">
            I’m currently not looking for a new job, but here is my resume if
            you’re into that. If you want to see how I built it, here is a
            GitHub link to the repository. I’m currently not looking for a new
            job, but here is my resume if you’re into that.
          </p>
        </slide>
      </hooper>

      <div class="pagination">
        <svg
          @click.prevent="slidePrev"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.52398 9.1666H16.6673V10.8333H6.52398L10.994 15.3033L9.81565 16.4816L3.33398 9.99993L9.81565 3.51826L10.994 4.6966L6.52398 9.1666Z"
            fill="#586069"
          />
        </svg>
        <span
          ><span>{{ carouselData }}</span> of 1.000</span
        >
        <svg
          @click.prevent="slideNext"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4773 9.1666L9.00732 4.6966L10.1857 3.51826L16.6673 9.99993L10.1857 16.4816L9.00732 15.3033L13.4773 10.8333H3.33398V9.1666H13.4773Z"
            fill="#586069"
          />
        </svg>
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
  data() {
    return {
      carouselData: 0,
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.carouselData = payload.currentSlide + 1;
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