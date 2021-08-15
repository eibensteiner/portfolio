<template>
  <div
    class="background"
    @click="setInactive()"
    :class="isActive ? 'is-active' : 'is-inactive'"
  >
    <div
      class="panel"
      ref="panel"
      :class="isActive ? 'is-active' : 'is-inactive'"
      @click.stop=""
    >
      <div class="search">
        <icon-search class="text-gray-400"></icon-search>
        <input
          type="text"
          v-model="search"
          :placeholder="'Search for something'"
          ref="search"
        />
      </div>
      <div class="results">
        <div class="content" ref="content">
          <ul class="section" v-for="sectionItem in result">
            <span class="section-title">{{
              sectionItem.item ? sectionItem.item.title : sectionItem.title
            }}</span>
            <li
              class="entry"
              v-for="resultItem in sectionItem.item
                ? sectionItem.matches
                : sectionItem.entries"
              ref="entry"
              @mousemove="setEntryActive(resultItem)"
            >
              {{ resultItem.value ? resultItem.value : resultItem.title }}
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
      isActive: false,
      search: "",
      list: commands,
      result: commands,
      counter: 0,
      openOn: "$mod+KeyK",
    };
  },

  mounted() {
    this.fuse = new Fuse(this.list, options); // Initialize Fuse

    // Keybinding
    tinykeys(window, {
      [this.openOn]: (event) => {
        event.preventDefault();
        if (!this.isActive) {
          this.setActive();
        } else {
          this.setInactive();
        }
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
        if (this.isActive && this.counter > 0) {
          this.setPreviousEntryActive();
        } else if (this.isActive && this.counter === 0) {
          this.setLastEntryActive();
        }
      },

      Escape: (event) => {
        event.preventDefault();
        if (this.isActive) {
          this.setInactive();
        }
      },

      Enter: (event) => {
        event.preventDefault();
        if (this.isActive) {
          // Entry should be selected
        }
      },
    });
  },

  watch: {
    search() {
      console.log(this.result);
      if (this.search.trim() === "") {
        this.result = this.list;
        setTimeout(() => {
          this.setFirstEntryActive();
        }, 1);
      } else {
        this.result = this.fuse.search(this.search.trim());
        setTimeout(() => {
          if (this.result.length !== 0) {
            this.setFirstEntryActive();
          }
        }, 1);
      }
    },
  },

  methods: {
    setActive() {
      this.isActive = true;
      this.focusOnSearch();
      setTimeout(() => {
        this.setFirstEntryActive();
      }, 1);
    },

    setInactive() {
      this.isActive = false;
      this.result = this.list; // Reset Subcommands Array
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
      return this.isActive && this.counter === this.$refs.entry.length - 1;
    },
  },
};
</script>

<style scoped>
.background {
  @apply fixed top-0 right-0 bottom-0 left-0 max-w-full flex justify-center items-start;
}

.panel {
  @apply mt-24 bg-gray-800 shadow-xl flex flex-col rounded-lg max-w-lg w-full transition-opacity overflow-hidden;
}

.panel > * {
  @apply w-full;
}

.is-active {
  @apply visible opacity-100;
}

.is-inactive {
  @apply invisible opacity-0;
}

.search {
  @apply border-b border-gray-700 px-5 flex items-center;
}

.search > input {
  @apply h-14 bg-transparent flex-1 ml-3 focus-visible:outline-none focus:outline-none text-white;
}

.search > input::placeholder {
  @apply text-gray-400;
}

.results {
  @apply max-h-80 overflow-y-auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.results::-webkit-scrollbar {
  @apply hidden;
}

.results:empty,
.section-title:empty {
  @apply hidden;
}

.section {
  @apply flex flex-col p-2;
}

.section:not(:last-child) {
  @apply border-b border-gray-700;
}

.section > * {
  @apply w-full px-4;
}

.section-title {
  @apply font-normal text-gray-400 text-sm mt-3 mb-2;
}

.entry {
  @apply h-12 flex items-center justify-between cursor-pointer text-gray-200 rounded-md;
}

.entry.active {
  @apply bg-gray-700 text-white bg-opacity-50;
}
</style>