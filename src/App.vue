<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';
import { computed, onMounted } from "vue";
import { adsService } from "./services/AdsService.js";
import Pop from "./utils/Pop.js";
import { logger } from "./utils/Logger.js";
import AdCard from "./components/globals/AdCard.vue";

const ads = computed(() => AppState.ads)

onMounted(() => {
  getAds()
})

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
  <header>
    <Navbar />
  </header>
  <main>
    <div class="container-fluid">
      <section class="row">
        <div class="col-md-2">
          PROFILE INFO
        </div>
        <div class="col-md-8">
          <router-view />
        </div>
        <div class="col-md-2">
          <div v-for="ad in ads" :key="ad.title">
            <AdCard :adProp="ad" />
          </div>
        </div>
      </section>
    </div>
  </main>
  <footer>
    <div class="d-flex justify-content-around mb-5">
      <button class="btn fs-4"> {{ " < " }} Previous</button>
          <button class=" btn fs-4">Next {{ " > " }}</button>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
