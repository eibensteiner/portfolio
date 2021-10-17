<template>
  <div class="card bg-gray-100 h-146 flex flex-col justify-between">
    <div>
      <div>
        <h2 class="inline-flex">Command</h2>
        <lib-badge class="ml-2">Soon</lib-badge>
      </div>
      <p>Currently I’m working as a Product & Brand</p>
    </div>

    <div class="panel">
      <div class="search">
        <icon-search class="text-gray-400"></icon-search>
        <input type="text" :placeholder="'Search for something ...'"/>
      </div>
      <div class="results">
        <div class="content">
          <ul>
            <span>Section Name</span>
            <li class="active">About Dominik</li>
          </ul>
          <ul>
            <span>Section Name</span>
            <li>List Entry</li>
            <li>List Entry 2</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card:hover .panel {
    @apply -translate-y-0.5;
}

.panel {
  @apply mt-24 bg-gray-800 shadow-xl flex flex-col rounded-lg max-w-lg w-full transition-opacity overflow-hidden absolute right-0 bottom-8 left-8 transition-transform;
}

.search {
  @apply border-b border-gray-700 px-5 flex items-center w-full;
}

.search > input {
  @apply h-14 bg-transparent flex-1 ml-3 focus-visible:outline-none focus:outline-none text-white;
}

.search > input::placeholder {
  @apply text-gray-400;
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
  @apply border-b border-gray-700;
}

ul > span {
  @apply font-normal text-gray-400 text-sm mt-3 mb-2 w-full px-4 empty:hidden;
}

li {
  @apply h-12 w-full px-4 flex items-center justify-between cursor-pointer text-gray-200 rounded-md;
}

li.active {
  @apply bg-gray-700 text-white bg-opacity-50;
}
</style>