<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter, useRoute, RouterLink } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goHome() {
  router.push({ name: 'carte' })
}

function pickRandomMovie() {
  router.push({ name: 'suggestion', params: { id: Math.floor(Math.random() * 378) } })
}

function chooseYourWay() {
  router.push({ name: 'menus' })
}

const isRouteCarte = computed(() => route.name === 'carte')
const isRouteMenus = computed(() => route.name === 'menus')
const isRouteSuggestion = computed(() => route.name === 'suggestion')
</script>

<template>
  <main>
    <TransitionGroup name="fade">
    <nav v-if="isRouteCarte" class="nav-grid">
      <span 
        class="home-item"
        @click="chooseYourWay()"
      >
        Les menus
      </span>
      <RouterLink to="/" class="no-link  mh-auto">
        <h1 class="home-title">La carte</h1>
      </RouterLink>
      <span 
        class="home-item" 
        @click="pickRandomMovie()"
      >
        Plat du jour
      </span>
    </nav>

    <nav v-if="isRouteMenus" class="nav-grid">
      <span 
        class="home-item"
        @click="pickRandomMovie()"
      >
        Plat du jour
      </span>
      <h1 class="mh-auto home-title" 
        @click="chooseYourWay()">
        Les menus
      </h1>
      <span 
        class="home-item" 
        @click="goHome()"
      >
        La carte
      </span>
    </nav>

    <nav v-if="isRouteSuggestion" class="nav-grid">
      <span 
        class="home-item"
        @click="goHome()"
      >
        La carte
      </span>
      <h1 class="mh-auto home-title" 
        @click="pickRandomMovie()">
        Plat du jour
      </h1>
        <span 
        class="home-item" 
        @click="chooseYourWay()"
      >
       Les menus
      </span>
    </nav>
  </TransitionGroup>
    <RouterView />
  </main>
</template>

<style>
.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5rem 0 2rem 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
