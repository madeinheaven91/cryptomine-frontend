<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue'
import Pickaxe from './components/icons/Pickaxe.vue'
import Header from './components/Header.vue'
import Block from './components/Block.vue'
import BottomPanel from './components/BottomPanel.vue'
import currentUser from './api/fetchUser'
import syncUser from './api/syncUser'
import { onBlockClick } from './api/functions'

onBeforeUnmount(() => syncUser)
</script>

<template>
  <div id="body__wrapper" class="flex flex-col gap-12 justify-between items-center h-full">
    <Header
      :moneyTotal="currentUser.moneytotal"
      :perClick="currentUser.perclick"
      :perSec="currentUser.persecond"
    />
    <Block rank="diamond" @click="onBlockClick()" />
    <BottomPanel />
  </div>
</template>

<style scoped></style>
