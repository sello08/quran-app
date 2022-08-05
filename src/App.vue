
<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div class="search">
        <SearchBar />
      </div>
      <ChapterList />
      <!-- ChapterList component -->
    </a-layout-sider>
    <a-layout>
      <PageHeader />
      <!-- Header component -->
      <a-layout-content :style="{ margin: '110px 18px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <div class="container">
            <ChapterDetails />
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import ChapterList from "./views/ChapterList.vue";
import PageHeader from "./views/PageHeader.vue";
import SearchBar from "./views/MySearchBar.vue";
import ChapterDetails from "./views/ChapterDetails.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  components: { ChapterList, ChapterDetails, PageHeader, SearchBar },

  setup() {
    const store = useStore();
    const selectedChapterId = computed(() => store.state.selectedChapterId);

    function onSearch() {}

    return {
      selectedChapterId,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.container {
  display: flex;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
