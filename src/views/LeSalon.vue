<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue'
  import rawData from '@/assets/data.json'

</script>

<template>
  <div class="salon">
    <div class="home-container">
      <div class="flex  wrap  between">
        <MovieCard 
          v-for="(movie, idx) of rawData"
          :key="idx"
          :title="movie.Title"
          :year="movie.Year"
          :runtime="movie.Runtime"
          :genre="movie.Genre"
          :director="movie.Director"
          :actors="movie.Actors"
          :poster="movie.Poster"
          :plot="movie.Plot"
        />
      </div>
    </div>
  </div>
</template>
