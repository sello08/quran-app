<template>
  <div>
    <a-modal
      class="content"
      :visible="isShowing"
      title=""
      okText="Close"
      @cancel="handleCancel"
    >
      <div class="verse" v-for="verse in verses" :key="verse.id">
        {{ verse }}
      </div>
      <a-pagination
        v-model:current="currentPage"
        :total="200"
        show-less-items
      />
    </a-modal>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { getChapterContent } from "@/composables/axiosFunctions";
import Modal from "ant-design-vue/lib/modal";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";

export default {
  name: "ChapterContent",
  props: ["selectedChapterId"],
  components: { Modal },

  setup() {
    const verses = ref([]);
    const currentPage = ref(1);
    const store = useStore();
    const isShowing = computed(() => store.state.isShowing);
    const selectedChapterId = computed(() => store.state.selectedChapterId);
    const lang = computed(() => store.state.lang);

    function handleCancel() {
      store.commit("updateIsShowing");
      return (currentPage.value = ref(1));
    }

    watch(
      () => selectedChapterId.value,
      () => {
        fetchVerses();
      }
    );

    watch(
      () => currentPage.value,
      () => {
        fetchVerses();
      }
    );

    watch(
      () => lang.value,
      () => {
        fetchVerses();
      }
    );

    function fetchVerses() {
      getChapterContent(
        selectedChapterId.value,
        currentPage.value,
        lang.value
      ).then((data) => {
        verses.value = [];
        //Iterate on verses (data is verses array)
        for (let i = 0; i < data.length; i++) {
          //Get current verse of this iteration step (e.g i = 0)
          const verse = data[i];

          // verse string to be filled by appending words of the word in second for loop
          let verseString = "";

          // Iterate words of the verse to append them to verseString defined above
          for (let j = 0; j < verse.words.length; j++) {
            // Append the current word with a one space character behind it
            verseString += verse.words[j].translation.text;
            verseString += " ";
          }

          // Push the created verseString to verses array
          verses.value.push(verseString);
        }
      });
    }

    return {
      verses,
      currentPage,
      fetchVerses,
      isShowing,
      handleCancel,
      lang,
    };
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.verse {
  margin: 20px 0;
}
.content {
  max-height: 100vh;
  overflow: scroll;
}
</style>