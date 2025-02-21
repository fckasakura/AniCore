<template>
  <div class="home">
    <section class="banner">
      <img src="https://media4.giphy.com/media/fS4cWezsJoXPYzLR45/giphy.gif" alt="Spring Anime 2025 Banner" loading="lazy" />
      <h2>Весенний сезон аниме 2025</h2>
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
            @click="$router.push(`/anime/${anime.id}`)"
          >
            <img :src="anime.image" :alt="anime.title" loading="lazy" />
            <div class="popular-info">
              <h4>{{ anime.title }}</h4>
              <p>{{ anime.genres ? anime.genres.join(', ') : 'N/A' }} • {{ anime.rating }}</p>
              <div v-if="hoveredAnime === anime.id" class="short-desc">{{ anime.shortDescription }}</div>
            </div>
          </div>
        </div>
        <button class="pagination-btn next" @click="nextPage('popular')" :disabled="popularPage === Math.ceil(filteredAnime.length / itemsPerPage)">→</button>
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
import axios from 'axios';
import AnimeCard from '@/components/AnimeCard.vue';

export default {
  components: { AnimeCard },
  data() {
    return {
      allAnime: [],
      filteredAnime: [],
      newAnime: [],
      trendingAnime: [],
      popularPage: 1,
      itemsPerPage: 13,
      hoveredAnime: null
    };
  },
  computed: {
    paginatedPopular() {
      const start = (this.popularPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredAnime.slice(start, end);
    }
  },
  methods: {
    async fetchAnimeData() {
      try {
        const response = await axios.get('https://8fa4112ec6cc62ee.mokky.dev/Anime');
        this.allAnime = response.data;
        this.filteredAnime = [...this.allAnime];
        this.newAnime = this.allAnime.filter(a => a.status === 'ongoing').slice(0, 5);
        this.trendingAnime = this.allAnime.sort((a, b) => b.rating - a.rating).slice(0, 5);
      } catch (error) {
        console.error('Ошибка загрузки аниме:', error);
      }
    },
    prevPage() {
      if (this.popularPage > 1) this.popularPage--;
    },
    nextPage() {
      if (this.popularPage < Math.ceil(this.filteredAnime.length / this.itemsPerPage)) this.popularPage++;
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
  flex-wrap: wrap;
}
.popular-item {
  position: relative;
  flex: 1;
  max-width: 180px;
  min-width: 140px;
  background: #212121;
  border: 1px solid #424242;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
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