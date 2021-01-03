<template>
  <div class="container">
    <Project
      :heading="'Command'"
      :subheading="'Explore any website through a lightweight and centralized navigation system'"
      :date="{startDate: '2020', endDate: 'Now'}"
    >
      <div class="img variant-first">
        <img src="~/assets/img/command.svg" />
      </div>
    </Project>
    <Project
      :heading="'Command'"
      :subheading="'Explore any website through a lightweight and centralized navigation system'"
      :date="{startDate: '2020', endDate: 'Now'}"
    >
      <div class="img variant-second">
        <img src="~/assets/img/command.svg" />
      </div>
    </Project>
    <Project
      :heading="'Command'"
      :subheading="'Explore any website through a lightweight and centralized navigation system'"
    >
      <div class="grid">
        <Repository
        v-for="repository in repositories" :key="repository.id"
          :user="repository.owner.login"
          :repository="repository.name"
          :description="repository.description"
        />
      </div>
    </Project>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      repositories: null,
    };
  },
  created: function () {
    axios.get('https://api.github.com/users/dowu/repos').then((response) => {
      this.repositories = response.data;
    });
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin-bottom: 104px;
  }
}

.repository {
  &:last-child {
    & > ::v-deep .repository-heading, & > ::v-deep .repository-content {
      filter: blur(20px)
    }
  }
}
</style>

