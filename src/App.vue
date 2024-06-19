<script setup>
import { ref } from 'vue'
import Pickaxe from './components/icons/Pickaxe.vue'
import Header from './components/Header.vue'
import Block from './components/Block.vue'
import BottomPanel from './components/BottomPanel.vue'
</script>

<template>
  <div id="body__wrapper" class="flex flex-col gap-12 items-center">
    <Header />
    <Block />
    <BottomPanel />
  </div>
</template>

<style scoped></style>
