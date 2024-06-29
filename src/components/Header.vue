<template>
  <header class="flex flex-col gap-5 items-center select-none">
    <div class='flex gap-3'>
      <img src="/icons/logo.png" width="32px">
      <span class="text-3xl font-bold">CryptoMine</span>
    </div>
    <div class="flex flex-col items-center w-11/12">
      <div
        id="moneyTotalField"
        class="items-center w-full text-4xl text-center bg-white border border-black border-1"
      >
        {{ NumToFormattedStr(moneyTotal) }} $
      </div>
      <span id="perClickField" class="text-xl text-white"
        >+{{ NumToFormattedStr(perClick) }} / клик</span
      >
      <span id="perSecField" class="text-xl text-white"
        >+{{ NumToFormattedStr(perSec) }} / сек</span
      >
    </div>
  </header>
</template>

<script setup lang='ts'>
import { NumToFormattedStr } from '../util.js'
const props = defineProps({
  moneyTotal: Number,
  perClick: Number,
  perSec: Number
})
</script>
