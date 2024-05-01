<script setup lang="ts">
const props = defineProps<{
  poster: string,
  title: string,
  genre: string,
  runtime: string,
  director: string,
  actors: string,
  year: string,
  plot: string,
}>()

</script>

<template>
    <div 
      class="movie-box"
    >
      <img 
        class="poster"
        :src="props.poster" 
        :alt="props.title"
      >
      <div class="infos">
        <span class="bold">{{ props.title }} ({{ props.year }})</span>
        <p>{{ props.runtime }}</p>
        <p>{{ props.plot }}</p>
      </div>
    </div>
</template>

<style scoped>
  .movie-box {
    width: 15%;
    height: 20rem;
    margin-bottom: 1rem;
    background-color: rgba(0,0,0,1);
    background-size: cover;
    color: white;
    position: relative;
  }

  .movie-box:hover .poster {
    transition: all 0.3s ease-in-out;
    opacity: 0.05;
  }

  .poster {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .infos {
    padding: 1rem;
  }

</style>