<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue'
  import moviesData from '@/assets/data.json'

  // const moviesList = JSON.parse(moviesData)

</script>

<template>
  <div class="salon">
    <div class="home-container">
      <div class="flex  wrap">
        <MovieCard 
          v-for="(movie, idx) of moviesList"
          :key="idx"
          :title="movie.title"
          :year="movie.year"
          :runtime="movie.runtime"
          :genre="movie.genre"
          :director="movie.director"
          :actors="movie.actors"
          :poster="movie.poster"
        />
      </div>
    </div>
  </div>
</template>
