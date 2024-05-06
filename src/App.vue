<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()

function pickRandomMovie() {
  router.push({ name: 'suggestion', params: { id: Math.floor(Math.random() * 366) } })
}

function chooseYourWay() {
  router.push({ name: 'menus' })
}
</script>

<template>
  <main>
    <nav class="nav-grid">
      <span 
        class="home-item"
        @click="chooseYourWay()"
      >
        les menus
      </span>
      <a href="/" class="no-link  mh-auto"><h1 class="home-title">LA CARTE</h1></a>
      <span 
        class="home-item" 
        @click="pickRandomMovie()"
      >
        suggestion du chef
      </span>
    </nav>
    <RouterView />
  </main>
</template>

<style>
.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5rem 0 2rem 0;
}

</style>
