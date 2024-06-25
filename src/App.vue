<script setup>
import { ref } from 'vue'
import Pickaxe from './components/icons/Pickaxe.vue'
import Header from './components/Header.vue'
import Block from './components/Block.vue'
import BottomPanel from './components/BottomPanel.vue'
import axios from 'axios'

const serverURL = 'http://localhost:3000'

const user = axios.get(`${serverURL}/api/user/1`)
console.log(user)
console.log("bebra")

let moneyTotal = ref(0)
let perClick = ref(1)
let perSec = ref(0)

function onBlockClick() {
  moneyTotal.value += perClick.value
}

setInterval(() => {
  moneyTotal.value += perSec.value
}, 1000)
</script>

<template>
  <div id="body__wrapper" class="flex flex-col gap-12 justify-between items-center h-full">
    <Header :moneyTotal="moneyTotal" :perClick="perClick" :perSec="perSec" />
    <Block rank="diamond" @click="onBlockClick()" />
    <BottomPanel />
  </div>
</template>

<style scoped></style>
