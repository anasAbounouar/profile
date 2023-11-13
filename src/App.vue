<template>
  <div>
    <NavBar  v-if="isloaded"  />
    <PageLoader v-if="!isloaded" />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
import PageLoader from "./components/PageLoader.vue";
import { onMounted,ref } from "vue";
const isloaded = ref(false);

// Use the 'onMounted' lifecycle hook to set 'isloaded' to true
onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      // Set isloaded to true when the document is fully loaded
      isloaded.value = true;
    }
  };
});
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
