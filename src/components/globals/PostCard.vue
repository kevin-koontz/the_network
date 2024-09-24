<script setup>
import { AppState } from "@/AppState.js";
import { Account } from "@/models/Account.js";
import { Post } from "@/models/Post.js";
import { postsService } from "@/services/PostsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed } from "vue";

const account = computed(() => AppState.account)

const props = defineProps({
  postProp: { type: Post, required: true },
})


async function deletePost() {
  try {
    const userToDelete = await Pop.confirm("Are you certain you wish to delete this Post?!")

    if (!userToDelete) { return }

    await postsService.deletePost(props.postProp.id)
  }
  catch (error) {
    Pop.error(error);
    logger.error(error);
  }
}
const postId = props.postProp.id
async function likePost(postId) {
  const accountId = account.value.id
  try {
    await postsService.likePost(postId, accountId)
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
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
            <div class="mt-2 mx-2 fs-5">{{ postProp.createdAt.toDateString() }}</div>
            <div class="mdi mdi-account-school mx-2 fs-3"></div>
          </div>
        </div>
      </div>
      <div>
        <button v-if="postProp.creatorId == account?.id" @click="deletePost()"
          class="btn btn-outline-danger mx-4">Delete</button>
      </div>
    </div>
    <div>
      <div class="px-5 text-style">
        {{ postProp.body }}
      </div>
      <img v-if="postProp.imgUrl" :src="postProp.imgUrl" alt="BROKEN IMAGE LINK" class="user-post-img">
    </div>
    <div class="d-flex justify-content-end fs-1 p-3">
      <div @click.prevent="likePost(postId)" class="btn fs-3">
        <i v-if="postProp.likeIds.find(likeId => likeId == account?.id) == undefined"
          class="mdi mdi-cards-heart-outline"></i>
        <i v-else class="mdi mdi-cards-heart"></i>
      </div>
      <div v-if="postProp.likes.length > 0" class="fs-6 mt-3 mx-2">{{ postProp.likes.length }}</div>
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