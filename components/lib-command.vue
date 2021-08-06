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
        {{
          result
        }}
        <li
          class="entry"
          v-for="resultItem in result"
          ref="entry"
          @mousemove="setEntryActive(index)"
        >
          {{ resultItem.item.title || resultItem.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Fuse from "fuse.js";

export default {
  mounted() {
    var options = {
      shouldSort: true,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "author.firstName"],
    };
    console.log(this.result);
    this.fuse = new Fuse(this.list, options);
    this.result = this.list;
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

  data() {
    return {
      fuse: null,
      isActive: true,
      search: "",
      list: [
        {
          title: "Old Man's War",
          author: {
            firstName: "John",
            lastName: "Scalzi",
          },
        },
        {
          title: "The Lock Artist",
          author: {
            firstName: "Steve",
            lastName: "Hamilton",
          },
        },
        {
          title: "HTML5",
          author: {
            firstName: "Remy",
            lastName: "Sharp",
          },
        },
        {
          title: "Right Ho Jeeves",
          author: {
            firstName: "P.D",
            lastName: "Woodhouse",
          },
        },
        {
          title: "The Code of the Wooster",
          author: {
            firstName: "P.D",
            lastName: "Woodhouse",
          },
        },
        {
          title: "Thank You Jeeves",
          author: {
            firstName: "P.D",
            lastName: "Woodhouse",
          },
        },
        {
          title: "The DaVinci Code",
          author: {
            firstName: "Dan",
            lastName: "Brown",
          },
        },
        {
          title: "Angels & Demons",
          author: {
            firstName: "Dan",
            lastName: "Brown",
          },
        },
        {
          title: "The Silmarillion",
          author: {
            firstName: "J.R.R",
            lastName: "Tolkien",
          },
        },
        {
          title: "Syrup",
          author: {
            firstName: "Max",
            lastName: "Barry",
          },
        },
        {
          title: "The Lost Symbol",
          author: {
            firstName: "Dan",
            lastName: "Brown",
          },
        },
        {
          title: "The Book of Lies",
          author: {
            firstName: "Brad",
            lastName: "Meltzer",
          },
        },
        {
          title: "Lamb",
          author: {
            firstName: "Christopher",
            lastName: "Moore",
          },
        },
        {
          title: "Fool",
          author: {
            firstName: "Christopher",
            lastName: "Moore",
          },
        },
        {
          title: "Incompetence",
          author: {
            firstName: "Rob",
            lastName: "Grant",
          },
        },
        {
          title: "Fat",
          author: {
            firstName: "Rob",
            lastName: "Grant",
          },
        },
        {
          title: "Colony",
          author: {
            firstName: "Rob",
            lastName: "Grant",
          },
        },
        {
          title: "Backwards, Red Dwarf",
          author: {
            firstName: "Rob",
            lastName: "Grant",
          },
        },
        {
          title: "The Grand Design",
          author: {
            firstName: "Stephen",
            lastName: "Hawking",
          },
        },
        {
          title: "The Book of Samson",
          author: {
            firstName: "David",
            lastName: "Maine",
          },
        },
        {
          title: "The Preservationist",
          author: {
            firstName: "David",
            lastName: "Maine",
          },
        },
        {
          title: "Fallen",
          author: {
            firstName: "David",
            lastName: "Maine",
          },
        },
        {
          title: "Monster 1959",
          author: {
            firstName: "David",
            lastName: "Maine",
          },
        },
      ],
      result: this.list,
      counter: 0,
    };
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
        this.$refs.search.$el.focus(); // $el is needed to set focus on custom components
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