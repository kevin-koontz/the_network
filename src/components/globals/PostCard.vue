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
        <router-link :to="{ name: 'UserProfile', params: { profileId: postProp.creatorId } }"
          :title="`Go to ${postProp.creator.name}'s Profile Page!`">
          <img :src="postProp.creator.picture" alt="NO IMAGE PROVIDED" class="user-profile-img m-4">
        </router-link>
        <div class="my-5">
          <h4>{{ postProp.creator.name }}</h4>
          <div class="d-flex justify-content-start">
            <div class="mt-2 mx-2 fs-5">{{ postProp.customDate }}h</div>
            <div class="mdi mdi-account-school mx-2 fs-3"></div>
          </div>
        </div>
      </div>
      <div>
        <!-- //FIXME - get '...' to top of element -->
        <div class="btn fs-1 mx-4">...</div>
      </div>
    </div>
    <div>
      <div class="px-5 text-style">
        {{ postProp.body }}
      </div>
      <img v-if="postProp.imgUrl" :src="postProp.imgUrl" alt="BROKEN IMAGE LINK" class="user-post-img">
    </div>
    <div class="d-flex justify-content-end fs-1 p-3">
      <i class="mdi mdi-cards-heart-outline"></i>
      <!-- //FIXME - update with v-if="postProp.likeIds == account.id" once we have access to account id -->
      <i class="mdi mdi-cards-heart"></i>
      <!-- //FIXME - + logic => only show likes if likes >  -->
      <div v-if="postProp.likes.length > 0" class="fs-4 mt-3 mx-2">{{ postProp.likes.length }}</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.user-profile-img {
  height: 5dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.user-post-img {
  height: 30dvh;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  margin-top: 1rem;
}

.text-style {
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  font-weight: 400;
}
</style>