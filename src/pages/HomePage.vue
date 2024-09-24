<script setup>
import { AppState } from "@/AppState.js";
import { postsService } from "@/services/PostsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";
import PostCard from "@/components/globals/PostCard.vue";


const posts = computed(() => AppState.posts)

onMounted(() => {
  getAllPosts()
})

async function getAllPosts() {
  try {
    postsService.getAllPosts()
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}

</script>

<template>
  <div class="rounded shadow mt-5 mb-3">
    <div class="d-flex">
      <div class="">
        <img
          src="https://plus.unsplash.com/premium_photo-1722018576685-45a415a4ff67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFzdHJvbmF1Z2h0fGVufDB8fDB8fHww"
          alt="" class="user-profile-img m-4">
      </div>
      <div class="mt-4">
        <div class="form-floating">
          <textarea class="form-control text-area" placeholder="Enter post here!" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Share posts!</label>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-flex align-items-center mx-2">
            <i class="mdi mdi-image-multiple fs-2 me-2"></i>
            <span class="fs-6 fw-bold">Photo/Video</span>
          </div>
          <div class="d-flex align-items-center mx-2">
            <i class="mdi mdi-send fs-2 me-2"></i>
            <span class="fs-6 fw-bold">Post</span>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="post in posts" :key="post.id" class="my-5">
    <div>
      <PostCard :postProp="post" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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

.text-area {
  height: 150px;
  width: 700px;
  border: 1px solid black;
}
</style>
