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
        <span class="title">{{ props.title }} ({{ props.year }})</span>
        <p>{{ props.runtime }}</p>
        <p class="plot">{{ props.plot }}</p>
      </div>
    </div>
</template>

<style scoped>
  .title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .plot {
    font-size: 0.9rem;
  }

  .movie-box {
    background-color: rgba(0,0,0,1);
    background-size: cover;
    position: relative;
    min-width: 100%;
    min-height: max-content;
    aspect-ratio: 2/3;
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

  @media (max-width: 1250px) {
    .movie-box {
      width: 48%;
    }
  }

  @media (max-width: 720px) {
    .movie-box {
      width: 100%;
    }
  }
</style>