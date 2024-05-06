<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()

function pickRandomMovie() {
  router.push({ name: 'random', params: { id: Math.floor(Math.random() * 370) } })
}

function chooseYourWay() {
  router.push({ name: 'specific' })
}
</script>

<template>
  <main>
    <nav class="flex  mt-5  mb-2">
      <span 
        class="home-item" 
        @click="pickRandomMovie()"
      >
        random
      </span>
      <a href="/" class="no-link"><h1 class="home-title">UNE ENVIE ?</h1></a>
      <span 
        class="home-item"
        @click="chooseYourWay()"
      >
        précise
      </span>
    </nav>
    <RouterView />
  </main>
</template>

<style>

</style>
