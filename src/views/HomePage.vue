<template>
  <div class="home">
    <section class="banner">
      <img src="https://media4.giphy.com/media/fS4cWezsJoXPYzLR45/giphy.gif" alt="Spring Anime 2025 Banner" loading="lazy" />
      <h2>Весенний сезон аниме 2025</h2>
    </section>

    <section class="filters">
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
      <button class="filter-btn" @click="fetchFilteredAnime">Фильтр</button>
    </section>

    <section class="popular">
      <h3>Популярное</h3>
      <div class="popular-container">
        <button class="pagination-btn prev" @click="prevPage('popular')" :disabled="popularPage === 1">←</button>
        <div class="popular-list">
          <div 
            class="popular-item" 
            v-for="anime in paginatedPopular" 
            :key="anime.id" 
            @mouseover="hoveredAnime = anime.id" 
            @mouseleave="hoveredAnime = null"
          >
            <img :src="anime.image" :alt="anime.title" loading="lazy" />
            <div class="popular-info">
              <h4>{{ anime.title }}</h4>
              <p>{{ anime.genres.join(', ') }} • {{ anime.rating }}</p>
              <div v-if="hoveredAnime === anime.id" class="short-desc">{{ anime.shortDescription }}</div>
            </div>
          </div>
        </div>
        <button class="pagination-btn next" @click="nextPage('popular')" :disabled="popularPage === Math.ceil(popularAnime.length / itemsPerPage)">→</button>
      </div>
    </section>

    <section class="anime-blocks">
      <div class="block">
        <h3>Новые аниме</h3>
        <div class="card-list">
          <AnimeCard v-for="anime in newAnime" :key="anime.id" :anime="anime" />
        </div>
      </div>
      <div class="block">
        <h3>Сейчас смотрят</h3>
        <div class="card-list">
          <AnimeCard v-for="anime in trendingAnime" :key="anime.id" :anime="anime" />
        </div>
      </div>
    </section>

    <button class="all-anime-btn" @click="$router.push('/all-anime')">Все аниме</button>
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
      popularAnime: [],
      newAnime: [],
      trendingAnime: [],
      genres: [],
      years: [],
      ratings: [],
      popularPage: 1,
      itemsPerPage: 13, // Теперь 13 карточек на странице
      hoveredAnime: null
    };
  },
  computed: {
    paginatedPopular() {
      const start = (this.popularPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.popularAnime.slice(start, end);
    }
  },
  methods: {
    async fetchAnimeData() {
      try {
        const response = await axios.get('https://8fa4112ec6cc62ee.mokky.dev/Anime');
        const animeList = response.data;
        this.popularAnime = animeList.sort((a, b) => b.rating - a.rating).slice(0, 26); // Больше данных для 2 страниц по 13
        this.newAnime = animeList.filter(a => a.status === 'ongoing').slice(0, 5);
        this.trendingAnime = animeList.slice(0, 5);

        this.genres = [...new Set(animeList.flatMap(a => a.genres))];
        this.years = [...new Set(animeList.map(a => a.year))].sort((a, b) => b - a);
        this.ratings = [...new Set(animeList.map(a => Math.floor(a.rating)))].sort((a, b) => b - a);
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
        const animeList = response.data;
        this.newAnime = animeList.slice(0, 5);
        this.trendingAnime = animeList.slice(0, 5);
      } catch (error) {
        console.error('Ошибка фильтрации:', error);
      }
    },
    prevPage(section) {
      if (section === 'popular' && this.popularPage > 1) this.popularPage--;
    },
    nextPage(section) {
      if (section === 'popular' && this.popularPage < Math.ceil(this.popularAnime.length / this.itemsPerPage)) this.popularPage++;
    }
  },
  mounted() {
    this.fetchAnimeData();
  }
};
</script>

<style scoped>
.home {
  background: #171717;
  color: #ffffff;
}
.banner {
  position: relative;
  text-align: center;
}
.banner img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  filter: brightness(70%);
  border-radius: 10px;
}
.banner h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: #ffffff;
  background: rgba(23, 23, 23, 0.7);
  padding: 10px 20px;
  border-radius: 10px;
  transition: background 0.3s;
}
.filters {
  display: flex;
  gap: 10px;
  padding: 15px 0;
  background: #212121;
  border-bottom: 1px solid #424242;
}
.filters select {
  padding: 8px;
  border: 1px solid #424242;
  border-radius: 10px;
  background: #2c2c2c;
  color: #ffffff;
  font-size: 14px;
  transition: border-color 0.3s;
}
.filters select:hover {
  border-color: #e50914;
}
.filter-btn {
  padding: 8px 15px;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}
.filter-btn:hover {
  background: #b2070f;
}
.popular {
  padding: 20px 0;
}
.popular h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;
}
.popular-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popular-list {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap; /* Чтобы карточки не ломались, если не помещаются */
}
.popular-item {
  position: relative;
  flex: 1;
  max-width: 180px;
  min-width: 140px; /* Минимальная ширина для адаптивности */
  background: #212121;
  border: 1px solid #424242;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}
.popular-item:hover {
  transform: translateY(-5px);
}
.popular-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
.popular-info {
  padding: 10px;
  position: relative;
}
.popular-info h4 {
  margin: 0 0 5px;
  font-size: 14px;
  color: #ffffff;
}
.popular-info p {
  margin: 0;
  font-size: 12px;
  color: #757575;
}
.short-desc {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  background: rgba(33, 33, 33, 0.9);
  padding: 5px;
  font-size: 12px;
  color: #ffffff;
  border-radius: 10px 10px 0 0;
}
.pagination-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s;
}
.pagination-btn.prev {
  left: -50px;
}
.pagination-btn.next {
  right: -50px;
}
.pagination-btn:disabled {
  background: #424242;
  cursor: not-allowed;
}
.pagination-btn:hover:not(:disabled) {
  background: #b2070f;
}
.anime-blocks {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  gap: 20px;
}
.block {
  width: 50%;
}
.block h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 10px;
}
.card-list {
  display: flex;
  overflow-x: auto;
  gap: 10px;
}
.all-anime-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.all-anime-btn:hover {
  background: #b2070f;
  transform: scale(1.05);
}

/* Адаптивность */
@media (max-width: 1440px) {
  .popular-item {
    max-width: 160px;
  }
}
@media (max-width: 1024px) {
  .anime-blocks {
    flex-direction: column;
  }
  .block {
    width: 100%;
  }
  .popular-list {
    overflow-x: auto;
  }
  .popular-item {
    max-width: 140px;
  }
  .pagination-btn.prev {
    left: 0;
  }
  .pagination-btn.next {
    right: 0;
  }
}
@media (max-width: 768px) {
  .filters {
    flex-direction: column;
    padding: 10px 0;
  }
  .filters select, .filter-btn {
    width: 100%;
  }
  .banner h2 {
    font-size: 24px;
  }
  .popular-item {
    max-width: 120px;
  }
}
@media (max-width: 480px) {
  .banner img {
    height: 200px;
  }
  .banner h2 {
    font-size: 18px;
    padding: 5px 10px;
  }
  .block h3, .popular h3 {
    font-size: 18px;
  }
  .popular-item {
    max-width: 100px;
  }
  .popular-item img {
    height: 160px;
  }
}
</style>