<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

import moviesList from '@/assets/data.json'

  const query = ref()
  const wantedFields = ['Title', 'Year', 'Runtime', 'Genre', 'Director', 'Actors', 'Poster']
  let result = undefined
  let data = undefined
  let keys = []
  let values = []
  let refinedData = undefined

  async function addMovie() { 
    result = (await axios.get('http://www.omdbapi.com/?apikey=1521a140&t=' + query.value)).data
    moviesList.push(result)
    console.log(moviesList)
  }
</script>

<template>
  <input
    v-model="query" 
    type="text"
  >
  <button
    @click="addMovie()"
  >
    Ajouter
  </button>
</template>

<style scoped>

</style>
