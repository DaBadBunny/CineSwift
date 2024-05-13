<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue'
  import rawData from '@/assets/data.json'

  let MovieList = rawData.sort((a, b) => a.Title.localeCompare(b.Title))
</script>

<template>
    <div class="home-container">
      <div class="movie-grid">
        <MovieCard 
          v-for="(movie, idx) of MovieList"
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
</template>

<style scoped>
  .movie-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
  }
</style>