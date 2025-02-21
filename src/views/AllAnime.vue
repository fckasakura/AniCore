<template>
    <div class="all-anime">
      <div class="filters-sidebar">
        <h3>Фильтры</h3>
        <select v-model="selectedGenre" @change="fetchFilteredAnime">
          <option value="">Жанр</option>
          <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
        </select>
        <select v-model="selectedYear" @change="fetchFilteredAnime">
          <option value="">Год</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
        <select v-model="selectedRating" @change="fetchFilteredAnime">
          <option value="">Рейтинг</option>
          <option v-for="rating in ratings" :key="rating" :value="rating">{{ rating }}+</option>
        </select>
        <select v-model="selectedStatus" @change="fetchFilteredAnime">
          <option value="">Статус</option>
          <option value="ongoing">Онгоинг</option>
          <option value="completed">Завершён</option>
        </select>
        <button class="filter-btn" @click="fetchFilteredAnime">Применить</button>
      </div>
      <div class="anime-grid">
        <AnimeCard v-for="anime in allAnime" :key="anime.id" :anime="anime" />
      </div>
    </div>
  </template>
  
  <script>
  import AnimeCard from '@/components/AnimeCard.vue';
  import axios from 'axios';
  
  export default {
    components: { AnimeCard },
    data() {
      return {
        selectedGenre: '',
        selectedYear: '',
        selectedRating: '',
        selectedStatus: '',
        allAnime: [],
        genres: [],
        years: [],
        ratings: []
      };
    },
    methods: {
      async fetchAllAnime() {
        try {
          const response = await axios.get('https://8fa4112ec6cc62ee.mokky.dev/Anime');
          this.allAnime = response.data;
  
          this.genres = [...new Set(this.allAnime.flatMap(a => a.genres))];
          this.years = [...new Set(this.allAnime.map(a => a.year))].sort((a, b) => b - a);
          this.ratings = [...new Set(this.allAnime.map(a => Math.floor(a.rating)))].sort((a, b) => b - a);
        } catch (error) {
          console.error('Ошибка загрузки аниме:', error);
        }
      },
      async fetchFilteredAnime() {
        try {
          let url = 'https://8fa4112ec6cc62ee.mokky.dev/Anime';
          const params = [];
          if (this.selectedGenre) params.push(`genres=${this.selectedGenre}`);
          if (this.selectedYear) params.push(`year=${this.selectedYear}`);
          if (this.selectedRating) params.push(`rating_gte=${this.selectedRating}`);
          if (this.selectedStatus) params.push(`status=${this.selectedStatus}`);
          if (params.length) url += `?${params.join('&')}`;
  
          const response = await axios.get(url);
          this.allAnime = response.data;
        } catch (error) {
          console.error('Ошибка фильтрации:', error);
        }
      }
    },
    mounted() {
      this.fetchAllAnime();
    }
  };
  </script>
  
  <style scoped>
  .all-anime {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    background: #171717;
  }
  .filters-sidebar {
    width: 200px;
    background: #212121;
    padding: 15px;
    border: 1px solid #424242;
    border-radius: 10px;
  }
  .filters-sidebar h3 {
    color: #e50914;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .filters-sidebar select, .filters-sidebar button {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #424242;
    border-radius: 10px;
    background: #2c2c2c;
    color: #ffffff;
    font-size: 14px;
  }
  .filter-btn {
    background: #e50914;
    cursor: pointer;
    transition: background 0.3s;
  }
  .filter-btn:hover {
    background: #b2070f;
  }
  .anime-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .all-anime {
      flex-direction: column;
    }
    .filters-sidebar {
      width: 100%;
    }
    .anime-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
  }
  @media (max-width: 480px) {
    .anime-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
  </style>