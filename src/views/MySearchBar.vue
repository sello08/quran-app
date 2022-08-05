<template>
  <div class="logo">
    <a-input-search
      v-model:value="search"
      placeholder="search for surah"
      style="width: 170px"
      @search="onSearch"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "SearchBar",
  components: {},

  setup() {
    const search = ref("");

    watch(
      () => search.value,
      () => {
        console.log("searchbar:", search.value);
      }
    );

    return { search };
  },
};
</script>

<style>
</style>