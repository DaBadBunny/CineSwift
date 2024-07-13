<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue'
  import rawData from '@/assets/data.json'
  import { useRoute } from 'vue-router'
  import { computed } from 'vue';
  const route = useRoute()

  let RandomMovie = computed(() => rawData[route.params.id])
</script>

<template>
    <div class="home-container">
      <Transition appear name="fade">
      <div v-if="RandomMovie" class="suggested-movie">
        <MovieCard 
          :title="RandomMovie.Title"
          :year="RandomMovie.Year"
          :runtime="RandomMovie.Runtime"
          :genre="RandomMovie.Genre"
          :director="RandomMovie.Director"
          :actors="RandomMovie.Actors"
          :poster="RandomMovie.Poster"
          :plot="RandomMovie.Plot"
        />
      </div>
    </Transition>
    </div>
</template>

<style scoped>
.suggested-movie {
    width: 25%;
    margin: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>