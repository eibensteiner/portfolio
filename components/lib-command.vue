<template>
  <div
    class="background"
    @click="toggleVisibility()"
    :class="isVisible ? 'is-visible' : 'is-invisible'"
  >
    <div
      class="panel"
      ref="panel"
      :class="isVisible ? 'is-visible' : 'is-invisible'"
      @click.stop=""
    >
      <div class="search">
        <icon-search class="text-slate-dark-10"></icon-search>
        <input
          type="text"
          v-model="search"
          :placeholder="placeholder"
          ref="search"
        />
      </div>
      <div class="results">
        <div class="content" ref="content">
          <ul v-for="section in result">
            <span>{{
              section.item ? section.item.title : section.title
            }}</span>
            <li
              ref="entry"
              v-for="entry in section.item ? section.matches : section.entries"
              @mousemove="setEntryActive(entry)"
            >
              {{ entry.value ? entry.value : entry.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tinykeys from "tinykeys";
import Fuse from "fuse.js";
import { commands, options } from "@/utils/constants";

export default {
  data() {
    return {
      fuse: null,
      isVisible: false,
      search: "",
      list: commands,
      result: commands,
      placeholder: "Search for something ...",
      counter: 0,
      openOn: "$mod+KeyK",
    };
  },

  mounted() {
    this.fuse = new Fuse(this.list, options); // Initialize Fuse
    console.log(this.$refs);

    // Keybinding
    tinykeys(window, {
      [this.openOn]: (event) => {
        event.preventDefault();
        this.toggleVisibility();
      },

      ArrowDown: (event) => {
        event.preventDefault();
        if (!this.isLastEntry()) {
          this.setNextEntryActive();
        } else if (this.isLastEntry()) {
          this.setFirstEntryActive();
        }
      },

      ArrowUp: (event) => {
        event.preventDefault();
        if (this.isVisible && this.counter > 0) {
          this.setPreviousEntryActive();
        } else if (this.isVisible && this.counter === 0) {
          this.setLastEntryActive();
        }
      },

      Escape: (event) => {
        event.preventDefault();
        if (this.isVisible) {
          this.toggleVisibility();
        }
      },

      Enter: (event) => {
        event.preventDefault();
        if (this.isVisible) {
          // Entry should be selected
        }
      },
    });
  },

  watch: {
    search() {
      if (this.search.trim() === "") {
        this.result = this.list;
        setTimeout(() => {
          this.setFirstEntryActive();
        }, 1);
      } else {
        this.result = this.fuse.search(this.search.trim());
        if (this.result.length !== 0) {
          setTimeout(() => {
            this.setFirstEntryActive();
          }, 1);
        }
      }
    },
  },

  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        this.focusOnSearch();
        setTimeout(() => {
          this.setFirstEntryActive();
        }, 1);
      } else this.result = this.list;
    },

    focusOnSearch() {
      this.search = "";
      setTimeout(() => {
        this.$refs.search.focus();
      }, 1);
    },

    setEntryActive(resultItem) {
      const filterTitle = resultItem.title ?? resultItem.value;
      const newElement = this.$refs.entry.findIndex(
        (item) => item.innerText === filterTitle
      );
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter = newElement !== -1 ? newElement : 0;
      this.$refs.entry[this.counter].classList.add("active");
    },

    setFirstEntryActive() {
      this.$refs.entry[this.counter]?.classList.remove("active");
      this.counter = 0;
      this.$refs.entry[this.counter]?.classList.add("active");
      this.$refs.content.scrollIntoView();
    },

    setLastEntryActive() {
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter = this.$refs.entry.length - 1;
      this.$refs.entry[this.counter].classList.add("active");
      this.$refs.entry[this.counter].scrollIntoView({
        behavior: "smooth",
      });
    },

    setNextEntryActive() {
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter++;
      this.$refs.entry[this.counter].classList.add("active");
      this.$refs.entry[this.counter].scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    },

    setPreviousEntryActive() {
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter--;
      this.$refs.entry[this.counter].classList.add("active");
      this.$refs.entry[this.counter].scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    },

    isLastEntry() {
      return this.isVisible && this.counter === this.$refs.entry.length - 1;
    },
  },
};
</script>

<style scoped>
.background {
  @apply fixed top-0 right-0 bottom-0 left-0 max-w-full flex justify-center items-start;
}

.panel {
  @apply mt-24 bg-slate-dark-3 shadow-xl flex flex-col rounded-lg max-w-lg w-full transition-opacity overflow-hidden;
}

.is-visible {
  @apply visible opacity-100;
}

.is-invisible {
  @apply invisible opacity-0;
}

.search {
  @apply border-b border-slate-dark-4 px-5 flex items-center w-full;
}

.search > input {
  @apply h-14 bg-transparent flex-1 ml-3 focus-visible:outline-none focus:outline-none text-white;
}

.search > input::placeholder {
  @apply text-slate-dark-10;
}

.results {
  @apply max-h-80 w-full overflow-y-auto empty:hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.results::-webkit-scrollbar {
  @apply hidden;
}

ul {
  @apply flex flex-col p-2;
}

ul:not(:last-child) {
  @apply border-b border-slate-dark-4;
}

ul > span {
  @apply font-medium text-slate-dark-12 text-sm mt-3 mb-2 w-full px-4 empty:hidden;
}

li {
  @apply h-12 w-full px-4 flex items-center justify-between cursor-pointer text-slate-dark-12 rounded-md;
}

li.active {
  @apply bg-slate-dark-4 text-white bg-opacity-50;
}
</style>