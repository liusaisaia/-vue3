<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input
      :placeholder="placeholder"
      :maxlength="maxlength"
      :dateTime="field"
    />
    <router-view />
    <tab />
  </div>
</template>

<script>
import myHeader from "@/components/header";
import SearchInput from "@/components/serchWarp"
import Tab from '@/components/Tab';

import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    myHeader,
    Tab,
    SearchInput
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();
    router.push("/");
    store.commit('setplaceholder', 'day')
    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setHeaderTitle', value);
      store.commit('setplaceholder', value);
      store.commit('setMaxLength', value);
    })
    return computed(() => state).value; // {}
  },
};
</script>

<style lang="scss"></style>
