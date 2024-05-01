<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()

function pickRandomMovie() {
  router.push({ name: 'random', params: { id: Math.floor(Math.random() * 372) } })
  }
</script>

<template>
  <main>
    <div class="flex">
      <span 
        class="home-item" 
        @click="pickRandomMovie()"
      >
        random
      </span>
      <a href="/" class="no-link"><h1 class="home-title">UNE ENVIE ?</h1></a>
      <span class="home-item">search</span>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
