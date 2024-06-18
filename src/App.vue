<script setup>
import {ref} from 'vue'
import Pickaxe from './components/icons/Pickaxe.vue'

let diamonds = ref(0);
let clickPower = 1;

function pickaxeClick(){
  diamonds.value += clickPower;
}

</script>

<template>
  <header class="flex">
    <!-- avatar -->
    <!-- nickname -->
  </header>
  <main class="flex flex-col gap-10">
    <div class="flex gap-5 w-full">
      <div class="flex flex-col gap-10 rounded-xl border w-1/3 items-center infoField">
        <p>За тап</p>
        <p>{{diamonds}}</p>
      </div>
      <div class="flex flex-col gap-10 rounded-xl border w-1/3 items-center infoField">
        <p>До апа</p>
        <p>1000</p>
      </div>
      <div class="flex flex-col gap-10 rounded-xl border w-1/3 items-center infoField">
        <p>Автокликер</p>
        <p>0</p>
      </div>
    </div>
    <div class="text-6xl">Diamonds: {{diamonds}}</div>
    <Pickaxe @click="pickaxeClick()" color="fff947"/>
  </main>
</template>

<style scoped></style>
