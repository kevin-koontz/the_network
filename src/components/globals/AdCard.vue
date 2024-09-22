<script setup>
import { Ad } from "@/models/Ad.js";

defineProps({
  adProp: { type: Ad, required: true }
})
</script>


<template>
  <div class="my-4">
    <img :src="adProp.tall" alt="AD DISPLAY HERE" class="rounded shadow">
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
}
</style>