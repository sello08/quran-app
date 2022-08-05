<template>
  <a-layout-header
    class="demo-page-header"
    style="background-color: #f5f5f5; padding: 18px"
  >
    <a-page-header
      class="page-header"
      :ghost="false"
      title="The Details"
      sub-title="of this Surah"
      bordered="true"
    >
      <template #extra>
        <a-button type="primary" @click="updateIsShowing">
          Show Verses
        </a-button>
        <Languages />
        <!-- <a-button key="1" type="primary">Languages</a-button> -->
      </template>
      <a-descriptions size="small">
        <div class="desc">
          <a-descriptions-item label="Revelation Place"
            ><h3>Revelation Place</h3>
            <div v-if="info">{{ info.revelation_place }}</div>
          </a-descriptions-item>
          <a-descriptions-item label="Verses Count">
            <h3>Verses Count</h3>
            <div v-if="info">{{ info.verses_count }}</div>
          </a-descriptions-item>
          <a-descriptions-item label="Revelation Order">
            <h3>Revelation Order</h3>
            <div v-if="info">{{ info.revelation_order }}</div>
          </a-descriptions-item>
          <a-descriptions-item label="Name Arabic">
            <h3>Name Arabic</h3>
            <div v-if="info">{{ info.name_arabic }}</div>
          </a-descriptions-item>
        </div>
      </a-descriptions>
    </a-page-header>
  </a-layout-header>
</template>

<script>
import Languages from "./Languages.vue";
import { ref, computed } from "@vue/reactivity";
import { getChapterInfo } from "@/composables/axiosFunctions";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";

export default {
  components: { Languages },
  setup() {
    const info = ref(null);
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const selectedChapterId = computed(() => store.state.selectedChapterId);
    const updateIsShowing = () => {
      store.commit("updateIsShowing");
    };

    watch(
      () => selectedChapterId.value,
      () => {
        getChapterInfo(selectedChapterId.value).then((data) => {
          info.value = data;
        });
      }
    );

    return {
      info,
      isShowing,
      updateIsShowing,
      getChapterInfo,
      selectedChapterId,
    };
  },
};
</script>


<style>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
.desc {
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0px;
}
.page-header {
  height: 140px;
}
</style>
