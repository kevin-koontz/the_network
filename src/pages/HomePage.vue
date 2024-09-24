<script setup>
import { AppState } from "@/AppState.js";
import { postsService } from "@/services/PostsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted, onUpdated } from "vue";
import PostCard from "@/components/globals/PostCard.vue";
import PostForm from "@/components/globals/PostForm.vue";


const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)

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
  <div v-if="account">

    <div class="mt-5 mb-3">
      <div>
        <PostForm />
      </div>
    </div>

  </div>

  <div v-for="post in posts" :key="post.id" class="my-5">
    <div>
      <PostCard :postProp="post" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
