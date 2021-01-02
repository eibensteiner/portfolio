<template>
  <div class="container">
    <ContentSection
      :heading="'Command'"
      :subheading="'Explore any website through a lightweight and centralized navigation system'"
    >
      <div class="img variant-first">
        <img src="~/assets/img/command.svg" />
      </div>
    </ContentSection>
    <ContentSection
      :heading="'Command'"
      :subheading="'Explore any website through a lightweight and centralized navigation system'"
    >
      <div class="img variant-second">
        <img src="~/assets/img/command.svg" />
      </div>
    </ContentSection>
    <ContentSection
      :heading="'Command'"
      :subheading="'Explore any website through a lightweight and centralized navigation system'"
    >
      <div class="grid">
        <Repository
          :user="'dowu'"
          :repository="'command'"
          :description="'test'"
        />
        <Repository
          :user="'dowu'"
          :repository="'command'"
          :description="'test'"
        />
        <Repository
          :user="'dowu'"
          :repository="'command'"
          :description="'test'"
        />
        <Repository
          :user="'dowu'"
          :repository="'command'"
          :description="'test'"
        />
      </div>
    </ContentSection>
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
    axios.get("https://github.com/users/dowu/repos").then((response) => {
      this.repositories = response.data;
      console.log(this.repositories);
    });
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 104px;
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

