<template>
  <div class="main-dtls">
    <h3 class="inform" v-if="!detail">Select a Surah From the Bar</h3>

    <h3 v-if="detail">{{ detail.short_text }}</h3>
    <hr />
    <h3 v-if="detail">
      Source: <span class="source">{{ detail.source }} </span>
    </h3>
    <ChapterContent />
  </div>
</template>

<script>
import { getChapterDetails } from "@/composables/axiosFunctions";
import ChapterContent from "./ChapterContent.vue";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { mapState } from "vuex";
import { onUpdated, watch } from "@vue/runtime-core";

export default {
  name: "ChapterDetails",
  components: { ChapterContent },

  setup() {
    const store = useStore();
    const currentDetail = ref(null);
    const detail = ref(null);
    const selectedChapterId = computed(() => store.state.selectedChapterId);
    const count = ref(null);
    const lang = computed(() => store.state.lang);

    watch(
      () => selectedChapterId.value,
      () => {
        getChapterDetails(selectedChapterId.value, lang.value).then((data) => {
          detail.value = data;
        });
      }
    );

    return {
      selectedChapterId,
      getChapterDetails,
      currentDetail,
      count,
      detail,
      lang,
    };
  },
};
</script>

<style>
</style>