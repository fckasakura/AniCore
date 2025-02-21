<template>
    <div class="all-anime">
      <div class="filters-sidebar">
        <h3>Фильтры</h3>
        <select v-model="selectedGenre">
          <option value="">Жанр</option>
          <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
        </select>
        <select v-model="selectedYear">
          <option value="">Год</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
        <select v-model="selectedRating">
          <option value="">Рейтинг</option>
          <option v-for="rating in ratings" :key="rating" :value="rating">{{ rating }}+</option>
        </select>
        <select v-model="selectedStatus">
          <option value="">Статус</option>
          <option value="ongoing">Онгоинг</option>
          <option value="completed">Завершён</option>
        </select>
        <button class="filter-btn">Применить</button>
      </div>
      <div class="anime-grid">
        <AnimeCard v-for="anime in allAnime" :key="anime.id" :anime="anime" />
      </div>
    </div>
  </template>
  
  <script>
  import AnimeCard from '@/components/AnimeCard.vue';
  
  export default {
    components: { AnimeCard },
    data() {
      return {
        selectedGenre: '',
        selectedYear: '',
        selectedRating: '',
        selectedStatus: '',
        genres: ["Экшен", "Романтика", "Фэнтези", "Комедия", "Драма"],
        years: [2025, 2024, 2023, 2022],
        ratings: [9, 8, 7, 6],
        allAnime: [
          { id: 1, title: "Атака титанов", genres: ["Экшен", "Драма"], rating: 8.7, image: "https://cdn.myanimelist.net/images/anime/1208/94706.jpg" },
          { id: 2, title: "Евангелион", genres: ["Меха", "Психология"], rating: 8.9, image: "https://cdn.myanimelist.net/images/anime/1223/96586.jpg" },
          { id: 3, title: "Клинок", genres: ["Экшен", "Фэнтези"], rating: 8.5, image: "https://cdn.myanimelist.net/images/anime/1977/142649.jpg" }
        ]
      };
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