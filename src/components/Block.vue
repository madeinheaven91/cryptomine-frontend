<template>
  <img :src="`${path}`" draggable="false" class="select-none cursor-pointer"/>
</template>

<script setup>
  const props = defineProps({
    rank: String
  })
let path = '/blocks/' + props.rank + '.jpg'

/* ranks
  1) dirt
  2) stone
  3) planks
  4) coal
  5) iron
  6) gold
  7) emerald
  8) diamond
  9) obsidian
  10) bedrock
  */
</script>

<style scoped>
img {
  border: black 0.125rem solid;
  width: 128px;
  aspect-ratio: 1/1;
}
img:active{
  animation: block-click 0.1s ease-in-out;
}

@keyframes block-click{
  0%{
  }
10%{
  transform: scale(1.1);
}
70%{
  transform: scale(0.8);
}
  100%{
  transform: scale(1);
}
}
</style>
