<script setup>
import { Post } from "@/models/Post.js";

defineProps({
  postProp: { type: Post, required: true }
})
</script>


<template>
  <div class="rounded shadow">
    <div class="d-flex justify-content-between">
      <div class="d-flex justify-content-start">
        <img :src="postProp.creator.picture" alt="User Profile Image" class="user-profile-img m-4">
        <div class="my-5">
          <h4>{{ postProp.creator.name }}</h4>
          <div class="d-flex justify-content-start">
            <div class="mt-2 mx-2 fs-5">{{ postProp.customDate }}h</div>
            <div class="mdi mdi-account-school mx-2 fs-3"></div>
          </div>
        </div>
      </div>
      <!-- FIXME - get '...' to top of element -->
      <div>
        <div class="btn fs-1 mx-4">...</div>
      </div>
    </div>
    <div>
      <div class="px-5 mb-4">
        {{ postProp.body }}
      </div>
      <img :src="postProp.imgUrl" alt="User posted image" class="user-post-img">
    </div>
    <div class="d-flex justify-content-end fs-1 p-3">
      <i class="mdi mdi-cards-heart-outline"></i>
      <i class="mdi mdi-cards-heart"></i>
      <div class="fs-4 mt-3 mx-2">13</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.user-profile-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.user-post-img {
  height: 40dvh;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}
</style>