<script setup>
import { AppState } from "@/AppState.js";
import { postsService } from "@/services/PostsService.js";
import { profilesService } from "@/services/ProfilesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import PostCard from "@/components/globals/PostCard.vue";

const route = useRoute()

const profile = computed(() => AppState.activeProfile)
const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)

onMounted(() => {
  getProfileById()
  getPostsbyCreatorId()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    logger.log('profile id via route', profileId)
    await profilesService.getProfileById(profileId)
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}

async function getPostsbyCreatorId() {
  try {
    const profileId = route.params.profileId
    await postsService.getPostsbyCreatorId(profileId)
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}

function checkGithub() {
  if (!profile.value.github) {
    alert("Github account has not been provided by this profile.")
  } else {
    window.open(profile.value.github, '_blank')
  }
}
function checkLinkedin() {
  if (!profile.value.linkedin) {
    alert("LinkedIn account has not been provided by this profile.")
  } else {
    window.open(profile.value.linkedin, '_blank')
  }
}
function checkResume() {
  if (!profile.value.resume) {
    alert("Resume link has not been provided by this profile.")
  } else {
    window.open(profile.value.resume, '_blank')
  }
}

</script>


<template>
  <div v-if="profile" class="shadow rounded mt-5 mb-3">

    <div>
      <div>
        <img :src="profile.coverImg" alt="banner image" class="user-cover-img">
      </div>
      <div class="d-flex justify-content-between px-4">
        <div class="position-relative">
          <img :src="profile.picture" :alt="profile.name" class="user-profile-img">
          <i v-if="profile.graduated" class="mdi mdi-account-school icon-style"></i>
        </div>
        <div class="fs-1">
          <a :href="profile.github" target="_blank">
            <i @click.prevent="checkGithub" class="mdi mdi-github mx-2" title="Connect with me on GitHub!"></i>
          </a>
          <a :href="profile.linkedin" target="_blank">
            <i @click.prevent="checkLinkedin" class="mdi mdi-linkedin mx-2" title="Connect with me on LinkedIn!"></i>
          </a>
          <a :href="profile.resume" target="_blank">
            <i @click.prevent="checkResume" class="mdi mdi-account-box mx-2" title="Check out my Resume!"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h4 class="m-0">{{ profile.class }}</h4>
      <h1 class="fw-bold">{{ profile.name }}</h1>
      <i>{{ profile.bio }}</i>
    </div>
    <div class="d-flex justify-content-end p-4">
      <button class="rounded">Edit</button>
    </div>

  </div>

  <div v-else>
    <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
  </div>

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


<style lang="scss" scoped>
.icon-style {
  height: 45px;
  width: 45px;
  font-size: xx-large;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  position: absolute;
  right: -150px;
  bottom: -15px;
  background-color: #f4f4f4;
}

button {
  color: black;
  border: 1px solid black;
  width: 10%;
  font-weight: 600;
}

i {
  color: black;
}

.user-cover-img {
  height: 10dvh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.user-profile-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 4px solid black;
  object-fit: cover;
  object-position: center;
  position: absolute;
  bottom: -15px;
}

.icon-graduate {
  position: absolute;
  right: 20px;
  text-shadow: 1px 1px 2px black;
}
</style>