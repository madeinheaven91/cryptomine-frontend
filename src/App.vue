<script setup>
import { ref } from 'vue'
import Pickaxe from './components/icons/Pickaxe.vue'
import Header from './components/Header.vue'
import BottomPanel from './components/BottomPanel.vue'
</script>

<template>
  <div id="body__wrapper" class="flex flex-col gap-20">
    <Header />

    <img id="block" src="/blocks/dirt.png" alt="" width="352px" height="352px" />

    <BottomPanel />
  </div>
</template>

<style scoped></style>
