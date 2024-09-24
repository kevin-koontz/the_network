<script setup>
import { AppState } from "@/AppState.js";
import { postsService } from "@/services/PostsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onUnmounted, ref } from "vue";
import PostCard from "@/components/globals/PostCard.vue";

const foundPosts = computed(() => AppState.searchedPosts)

onUnmounted(() => {
  clearSearchedPosts()
})

const userSearchQuery = ref({
  body: '',
})

function clearSearchedPosts() {
  AppState.searchedPosts = []
}

async function getPostsByQuery() {
  try {
    const searchQuery = userSearchQuery.value.body
    await postsService.getPostsbyQuery(searchQuery)
    userSearchQuery.value = {
      body: '',
    }
  }
  catch (error) {
    Pop.error(error);
    logger.log(error);
  }
}

</script>


<template>
  <form @submit.prevent="getPostsByQuery()" class="d-flex justify-content-center">
    <input v-model="userSearchQuery.body" class="form-control search-style w-50 mt-3" id="body" name="body" type="text"
      placeholder="Search" maxlength="1000">
  </form>
  <h1 class="text-center text-decoration-underline mt-3">Search Results</h1>

  <div v-for="post in foundPosts" :key="post.id" class="my-5">
    <div>
      <PostCard :postProp="post" />
    </div>
  </div>




</template>


<style lang="scss" scoped>
.search-style {
  border: 1px solid black;
}
</style>