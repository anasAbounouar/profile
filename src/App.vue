<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { RouterView } from "vue-router";
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
  
</style>
