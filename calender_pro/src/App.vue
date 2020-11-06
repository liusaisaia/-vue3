<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <router-view />
    <tab />
  </div>
</template>

<script>
import myHeader from "@/components/header";
import Tab from '@/components/tab';

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    myHeader,
    Tab
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();
    router.push("/");
    return computed(() => state).value; // {}
  },
};
</script>

<style lang="scss"></style>
