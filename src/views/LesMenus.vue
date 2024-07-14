<script setup>
  const menus = [
    {
      title: 'Petite faim', 
      filter: 'Runtime < 120' 
    },
    {
      title:'',
      filter: 'Runtime > 120' 
    },
    {
      title:'Farce en croute',
      filter: 'Comedy' 
    },
    {
      title:'Authentique',
      filter: 'Biography' 
    },
    {
      title:'Space cake',
      filter: 'Sci-Fi' 
    },
    {
      title:'Assiette à partager',
      filter: 'Romance' 
    },
    {
      title:'Plus un zeste !',
      filter: 'Crime' 
    },
    {
      title:'Piment',
      filter: 'Thriller' 
    },
    {
      title:'La faim des haricots',
      filter: 'Drama' 
    },
    {
      title:'Langue et cervelle',
      filter: 'Horror' 
    },
    {
      title:'Enquête de saveur',
      filter: 'Mystery' 
    }
  ]
</script>

<template>
  <div class="tag-container">
    <ul class="tag-group">
      <li 
      v-for="(el, idx) in menus"
      :key="idx"
      >
          <button class="tag">{{ el.title }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .tag-container {
    width: 50%;
    margin: 5rem auto 2rem auto;
  }

  .tag-group {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .tag {
    color: white;
    font-size: 1.25rem;
    font-family: "Courier Prime", monospace;
    border: none;
    padding: 0.5rem;
    background-color: transparent;
    cursor: pointer;
  }

  .tag:hover {
    font-weight: 700;
  }
</style>

