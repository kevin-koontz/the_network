<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
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
