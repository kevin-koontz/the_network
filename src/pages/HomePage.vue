<script setup>
import { AppState } from "@/AppState.js";
import { postsService } from "@/services/PostsService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";
import PostCard from "@/components/globals/PostCard.vue";
import { adsService } from "@/services/AdsService.js";
import AdCard from "@/components/globals/AdCard.vue";


const posts = computed(() => AppState.posts)
const ads = computed(() => AppState.ads)

onMounted(() => {
  getAllPosts()
  getAds()
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

async function getAds() {
  try {
    adsService.getAds()
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
</script>

<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-md-12">
        <div class="text-center fs-1 fw-bold">
          THE_NETWORK
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-md-2">
        PROFILE
      </div>
      <div v-for="post in posts" :key="post.id" class="col-md-8 mb-5">
        <div>
          <PostCard :postProp="post" />
        </div>
      </div>
      <div v-for="ad in ads" :key="ad.title" class="col-md-2">
        <AdCard :adProp="ad" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
