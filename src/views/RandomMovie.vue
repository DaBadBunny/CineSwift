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
      <div v-if="RandomMovie">
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
    </div>
</template>

<style scoped>
.movie-box {
  width: 30%;
  aspect-ratio: 2/3;
  margin: auto;
}
</style>