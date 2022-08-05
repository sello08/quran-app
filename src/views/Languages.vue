<template>
  <a-select
    ref="select"
    v-model:value="language"
    style="width: 120px"
    @focus="focus"
    placeholder="English"
  >
    <a-select-option value="en">English</a-select-option>
    <a-select-option value="de">German</a-select-option>
    <a-select-option value="tr">Turkish</a-select-option>
    <a-select-option value="ur">Urdu</a-select-option>
    <a-select-option value="ru">Russian</a-select-option>
  </a-select>
</template>
<script>
import { defineComponent } from "vue";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";

export default {
  name: "Languages",
  components: {},

  setup() {
    const store = useStore();
    const language = ref("");

    watch(
      () => language.value,
      () => {
        store.commit("updateLang", language.value);
      }
    );

    return {
      language,
    };
  },
};
</script>

