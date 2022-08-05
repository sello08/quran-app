<template>
  <div class="bbb">
    <div class="aaa">
      <a-menu
        theme="dark"
        mode="vertical-right"
        :default-selected-keys="['4']"
        v-for="chapter in chapters"
        :key="chapter.id"
        :selectedKeys="[selectedChapterId]"
      >
        <a-menu-item :key="chapter.id" @click="updateChapterId(chapter.id)">
          <span class="nav-text"> {{ chapter.name_simple }} </span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
import { getChapterList } from "@/composables/axiosFunctions";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";

export default {
  name: "ChapterList",

  setup() {
    const chapters = ref(null);
    const store = useStore();
    const lang = computed(() => store.state.lang);
    const selectedChapterId = computed(() => store.state.selectedChapterId);
    const updateChapterId = (p) => {
      store.commit("updateChapterId", p);
    };

    getChapterList(lang.value).then((data) => {
      chapters.value = data;
    });

    return {
      chapters,
      selectedChapterId,
      updateChapterId,
      lang,
    };
  },
};
</script>

<style>
.aaa {
  max-height: 100vh;
  overflow: scroll;
}

.bbb *::-webkit-scrollbar {
  width: 8px;
}

.bbb *::-webkit-scrollbar-track {
  background: #001529;
}

.bbb *::-webkit-scrollbar-thumb {
  background-color: #1890ff;
  border-radius: 4px;
}
</style>
