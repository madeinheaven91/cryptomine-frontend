<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 511.672 511.672"
    xml:space="preserve"
  >
    <path
      :style="`fill: #${colorShade}`"
      d="M511.672,391.952c0,0-97.531-128.574-180.463-211.49C248.278,97.531,119.705,0,119.705,0
	s136.006,0.328,263.83,128.136C511.344,255.945,511.672,391.952,511.672,391.952z"
    />
    <path
      style="fill: #8c4c4c"
      d="M380.943,85.507L9.369,457.082c-12.492,12.492-12.492,32.729,0,45.221
	c12.492,12.492,32.729,12.492,45.221,0l371.574-371.574L380.943,85.507z"
    />
    <rect
      x="322.589"
      y="87.817"
      transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 494.1918 518.9033)"
      :style="`fill: #${color}`"
      width="63.951"
      height="138.569"
    />
    <path
      style="fill: #434a54"
      d="M365.859,160.881c-4.154,4.169-10.915,4.154-15.068,0c-4.17-4.169-4.17-10.915,0-15.084
	c4.153-4.153,10.914-4.153,15.068,0C370.029,149.966,370.029,156.712,365.859,160.881z"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  color: String,
  colorShade: String
})

const colorShade = toShade(props.color)

function toShade(hex) {
  let rgb = {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  }
  let rgbShade = {
    r: Math.floor(rgb.r * 0.8).toString(16),
    g: Math.floor(rgb.g * 0.8).toString(16),
    b: Math.floor(rgb.b * 0.8).toString(16)
  }
  let res = rgbShade.r + rgbShade.g + rgbShade.b
  return res
}
</script>
