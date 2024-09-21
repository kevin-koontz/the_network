<script setup>
import { Ad } from "@/models/Ad.js";

defineProps({
  adProp: { type: Ad, required: true }
})
</script>


<template>
  <div class="d-flex m-2">
    <img :src="adProp.tall" alt="AD DISPLAY HERE">
  </div>
</template>


<style lang="scss" scoped></style>