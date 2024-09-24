<script setup>
import { AppState } from "@/AppState.js";
import { Account } from "@/models/Account.js";
import { Post } from "@/models/Post.js";
import { postsService } from "@/services/PostsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, ref } from "vue";


const account = computed(() => AppState.account)

const userInputPostData = ref({
  body: '',
  imgUrl: '',
})

async function createPost() {
  try {
    const inputPostData = userInputPostData.value
    await postsService.createPost(inputPostData)
    userInputPostData.value = {
      body: '',
      imgUrl: '',
    }
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
</script>


<template>
  <div class="rounded shadow">
    <div class="d-flex">
      <img :src="account.picture" alt="User Profile Image" class="user-profile-img m-4">
      <div class="mt-4">
        <textarea v-model="userInputPostData.body" class="form-control text-area" name="body" id="body" required
          maxlength="1000" placeholder="Share posts here!"></textarea>
        <div class="d-flex justify-content-between my-3">
          <div class="d-flex">
            <div class="d-flex me-2">
              <i class="mdi mdi-image-multiple fs-2 me-2"></i>
              <span class="fs-6 fw-bold">Photo/Video</span>
            </div>
            <input v-model="userInputPostData.imgUrl" type="url" id="imgUrl" placeholder="Post image URL here!"
              class="input-area rounded px-2 py-3" />
          </div>
          <div @click.prevent="createPost()" class="btn d-flex align-items-center mx-2">
            <i class="mdi mdi-send fs-2 me-2"></i>
            <span class="fs-6 fw-bold">Post</span>
          </div>
        </div>
      </div>
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

.text-area {
  height: 150px;
  width: 700px;
  border: 1px solid black;
}

.input-area {
  height: 25px;
  width: 200px;
  border: 1px solid black;
}
</style>