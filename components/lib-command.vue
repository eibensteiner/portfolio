<template>
  <div class="background" @click="setInactive()">
    <div
      class="panel"
      ref="panel"
      :class="isActive ? 'visible opacity-100' : 'invisible opacity-0'"
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
          {{ result }}

          <ul class="section" v-for="sectionItem in result">
            <span
              v-if="
                sectionItem.item ? sectionItem.item.title : sectionItem.title
              "
              class="leading-6 font-normal text-gray-400 text-sm mt-3 mb-2"
              >{{
                sectionItem.item ? sectionItem.item.title : sectionItem.title
              }}</span
            >
            <li
              class="entry"
              v-for="(resultItem, index) in sectionItem.item
                ? sectionItem.item.entries
                : sectionItem.entries"
              ref="entry"
              @mousemove="setEntryActive(resultItem, index)"
            >
              <template
                v-html="
                  resultItem.item ? resultItem.item.icon : resultItem.icon
                "
              ></template>

          <template v-if="result !== undefined">
            {{ result[0].matches ? result[0].matches[0].value : 'sow'}}
          </template>
              {{
                resultItem.item
                  ? sectionItem.matches[0].value
                  : resultItem.title
              }}
            
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
      shouldSort: false,
      threshold: 0.3,
      maxPatternLength: 32,
      includeScore: true,
      includeMatches: true,
      keys: ["entries.title"],
    };

    // Initialize Fuse
    this.fuse = new Fuse(this.list, options);
    console.log(this.list);

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
        if (this.isActive && this.counter < this.$refs.entry.length - 1) {
          event.preventDefault();
          this.setNextEntryActive();
        } else if (
          this.isActive &&
          this.counter === this.$refs.entry.length - 1
        ) {
          event.preventDefault();
          this.setFirstEntryActive();
        }
      },

      ArrowUp: (event) => {
        if (this.isActive && this.counter > 0) {
          event.preventDefault();
          this.setPreviousEntryActive();
        } else if (this.isActive && this.counter === 0) {
          event.preventDefault();
          this.setLastEntryActive();
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
    /*
    Sorting of results doesn't work yet. Try typing 't' and navigate with the arrow key down.
    You will notice a broken order.
    We should not try to fix that by changing the sorting algorithm but by changing how the results are going to be served or ideally by changing the way how we set commands active (not via refs)
    */

    search() {
      if (this.search.trim() === "") {
        this.result = this.list;
      } else {
        this.result = this.fuse.search(this.search.trim());
        console.log(this.result);
        console.log(this.$refs.entry);
        if (this.$refs.entry.length !== 0) {
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

    setEntryActive(resultItem, index) {
      const newElement = this.$refs.entry.findIndex(
        (item) => item.innerText === resultItem.title
      );
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter = newElement;
      this.$refs.entry[this.counter].classList.add("active");
    },

    setFirstEntryActive() {
      this.$refs.entry[this.counter].classList.remove("active");
      this.counter = 0;
      this.$refs.entry[this.counter].classList.add("active");
      this.$refs.content.scrollIntoView({
        behavior: "smooth",
      });
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

.search {
  @apply border-b border-gray-700 px-5 flex items-center;
}

.search > input {
  @apply h-14 bg-transparent flex-1 ml-3 focus-visible:outline-none text-white;
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

.results:empty {
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

.entry {
  @apply h-12 flex items-center justify-between cursor-pointer text-gray-200 rounded-md;
}

.entry.active {
  @apply bg-gray-700 text-white bg-opacity-50;
}
</style>