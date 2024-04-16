<script setup lang="ts">
const props = defineProps<{
  poster: string,
  title: string,
  genre: string,
  runtime: string,
  director: string,
  actors: string,
  year: string,
}>()
</script>

<template>
  <div class="movie-box">
    <img 
      :src="props.poster" 
      :alt="props.title"
    >
    <div class="flex"><span class="movie-title">{{ props.title }} ({{ props.year }})</span></div>
  </div>
</template>

<style scoped>
  .movie-box {
    background-color: black;
  }

  .movie-title {
    color: white;
    font-size: 1rem;
    font-weight: bold;
    margin: auto;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0.2rem;
  }

</style>