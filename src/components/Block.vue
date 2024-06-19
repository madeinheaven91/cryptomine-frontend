<template>
  <img :src="`${path}`"> 
</template>

<script setup>
  let path = '/blocks/dirt.png'
</script>

<style scoped>
img{
  border: black 1;
  width: 128px;
  aspect-ratio: 1/1;
}
</style>
