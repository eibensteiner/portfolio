<template>
  <div
    class="panel"
    ref="panel"
    :class="isActive ? 'visible opacity-100' : 'invisible opacity-0'"
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
      <ul class="section">
        <li
          class="entry"
          v-for="resultItem in result"
          ref="entry"
          @mousemove="setEntryActive(index)"
        >
          {{ resultItem.item ? resultItem.item.title : resultItem.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";
import { commands } from "@/utils/constants";

export default {
  data() {
      console.log("list im data", this.list);
    return {
      fuse: null,
      isActive: true,
      search: "",
      list: commands,
      result: commands,
      counter: 0,
    };
  },

  mounted() {
    let options = {
      shouldSort: true,
      threshold: 0.3,
      maxPatternLength: 32,
      keys: ["title", "author.firstName"],
    };
    this.fuse = new Fuse(this.list, options);
  },

  watch: {
    search() {
      if (this.search.trim() === "") {
        this.result = this.list;
        console.log(this.result);
      } else {
        this.result = this.fuse.search(this.search.trim());
        console.log(this.result);
        setTimeout(() => {
          this.setFirstEntryActive();
        }, 1);
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
      this.$refs.entry[this.counter].scrollIntoView();
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
.panel {
  @apply bg-white fixed shadow-xl flex flex-col rounded-lg max-w-lg border transition-opacity overflow-hidden;
}

.panel > * {
  @apply w-full;
}

.search {
  @apply border-b px-5 flex items-center;
}

.search > input {
  @apply h-14 bg-transparent flex-1 ml-3;
}

.results {
  @apply max-h-80 overflow-y-auto;
}

.results:empty {
  @apply hidden;
}

.section {
  @apply flex flex-col py-2;
}

.section > * {
  @apply w-full px-5;
}

.entry {
  @apply h-12 flex items-center justify-between cursor-pointer transition-colors;
}

.entry.active {
  @apply bg-gray-50;
}

.entry.active {
  @apply bg-gray-50;
}
</style>