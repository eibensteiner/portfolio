<template>
  <div class="background" @click="setInactive()">
    <div
      class="panel"
      ref="panel"
      :class="isActive ? 'visible opacity-100' : 'invisible opacity-0'"
      @click.stop=""
    >
      <div class="search">
        <icon-search></icon-search>
        <input
          type="text"
          v-model="search"
          :placeholder="'Search for something'"
          ref="search"
        />
      </div>
      <div class="results">
        <div class="content" ref="content">
          <ul class="section">
            <li
              class="entry"
              v-for="(resultItem, index) in result"
              ref="entry"
              @mousemove="setEntryActive(index)"
            >
              {{ resultItem.item ? resultItem.item.title : resultItem.title }}
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
import { commands } from "@/utils/constants";

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
    let options = {
      shouldSort: true,
      threshold: 0.3,
      maxPatternLength: 32,
      keys: ["title", "author.firstName"],
    };

    // Initialize Fuse
    this.fuse = new Fuse(this.list, options);

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
        if (this.isActive && this.counter < this.result.length - 1) {
          event.preventDefault();
          this.setNextEntryActive();
        }
      },

      ArrowUp: (event) => {
        if (this.isActive && this.counter > 0) {
          event.preventDefault();
          this.setPreviousEntryActive();
        }
      },

      Escape: (event) => {
        if (this.isActive) {
          event.preventDefault();
          this.setInactive();
        }
      },

      Enter: (event) => {
        if (this.isActive) {
          event.preventDefault();
        }
      },
    });
  },

  watch: {
    search() {
      if (this.search.trim() === "") {
        this.result = this.list;
      } else {
        this.result = this.fuse.search(this.search.trim());
        console.log(this.result);
        console.log(this.$refs.entry);
        if (this.result.length !== 0) {
          setTimeout(() => {
            this.setFirstEntryActive();
          }, 1);
        }
      }
    },
  },

  methods: {
    setActive() {
      this.isActive = true;
      this.focusOnSearch();
      this.setFirstEntryActive();
    },

    setInactive() {
      this.isActive = false;
      this.result = this.list; // Reset Subcommands Array
    },

    focusOnSearch() {
      this.search = "";
      setTimeout(() => {
        this.$refs.search.focus();
      }, 50);
    },

    setEntryActive(index) {
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter = index;
      this.$refs.entry[this.counter].classList.add("active");
    },

    setFirstEntryActive() {
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter = 0;
      this.$refs.entry[this.counter].classList.add("active");
      this.$refs.content.scrollIntoView();
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
  },
};
</script>

<style scoped>
.background {
  @apply fixed top-0 right-0 bottom-0 left-0 max-w-full flex justify-center items-start;
}

.panel {
  @apply mt-24 bg-white shadow-xl flex flex-col rounded-lg max-w-lg w-full border transition-opacity overflow-hidden;
}

.panel > * {
  @apply w-full;
}

.search {
  @apply border-b px-5 flex items-center;
}

.search > input {
  @apply h-14 bg-transparent flex-1 ml-3 focus-visible:outline-none;
}

.results {
  @apply max-h-80 overflow-y-auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.results::-webkit-scrollbar {
  @apply hidden;
}

.results:empty {
  @apply hidden;
}

.section {
  @apply flex flex-col py-2;
}

.section:not(:last-child) {
  @apply border-b;
}

.section > * {
  @apply w-full px-5;
}

.entry {
  @apply h-12 flex items-center justify-between cursor-pointer;
}

.entry.active {
  @apply bg-gray-50;
}

.entry.active {
  @apply bg-gray-50;
}
</style>