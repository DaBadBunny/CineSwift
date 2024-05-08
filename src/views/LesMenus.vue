<script setup>
  const menus = [
    {
      title: 'Petite faim', 
      filter: 'Runtime < 120' 
    },
    {
      title:'Ca se mange sans fin',
      filter: 'Runtime > 120' 
    },
    {
      title:'Ail Caramba',
      filter: 'Thriller' 
    },
    {
      title:'Léger et coloré',
      filter: 'Comedy' 
    },
    {
      title:'Authentique',
      filter: 'Biography' 
    },
    {
      title:'Là où on va il n\'y a pas besoin de fourchette',
      filter: 'Sci-Fi' 
    },
    {
      title:'A partager',
      filter: 'Romance' 
    },
    {
      title:'Poulet au plomb',
      filter: 'Crime' 
    },
    {
      title:'La dose de piment',
      filter: 'Thriller' 
    },
    {
      title:'La faim des haricots',
      filter: 'Drama' 
    },
    {
      title:'Langue de boeuf',
      filter: 'Horror' 
    },
    {
      title:'En quête de saveur',
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
    gap: 1rem;
  }

  .tag {
    color: white;
    font-size: 1rem;
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

