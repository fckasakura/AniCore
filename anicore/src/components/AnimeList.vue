<template>
    <section class="anime-list">
      <h2>Список аниме</h2>
      <div v-if="loading">Загрузка...</div>
      <div v-else class="anime-grid">
        <div v-for="anime in animes" :key="anime.title" class="anime-card">
          <img :src="anime.image" :alt="anime.title">
          <h3>{{ anime.title }}</h3>
          <p>{{ anime.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        animes: [],
        loading: true,
        error: null
      }
    },
    async created () {
      try {
        const response = await axios.get('https://mokky.dev/anime')
        this.animes = response.data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
  </script>
  
  <style scoped>
  .anime-list {
    margin: 2rem 0;
  }
  
  .anime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .anime-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
  }
  
  .anime-card img {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  