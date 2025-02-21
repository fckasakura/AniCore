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
      <div class="popular-list">
        <div class="popular-item" v-for="anime in paginatedPopular" :key="anime.id">
          <img :src="anime.image" :alt="anime.title" loading="lazy" />
          <div class="popular-info">
            <h4>{{ anime.title }}</h4>
            <p>{{ anime.genres.join(', ') }} • {{ anime.rating }}</p>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button @click="prevPage('popular')" :disabled="popularPage === 1">Назад</button>
        <span>{{ popularPage }} / {{ Math.ceil(popularAnime.length / itemsPerPage) }}</span>
        <button @click="nextPage('popular')" :disabled="popularPage === Math.ceil(popularAnime.length / itemsPerPage)">Вперёд</button>
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

export default {
  components: { AnimeCard },
  data() {
    return {
      selectedGenre: '',
      selectedYear: '',
      selectedRating: '',
      selectedStatus: '',
      popularAnime: [
        { id: 1, title: "Атака титанов", genres: ["Экшен", "Драма"], rating: 8.7, image: "https://cdn.myanimelist.net/images/anime/1208/94706.jpg" },
        { id: 2, title: "Евангелион", genres: ["Меха", "Психология"], rating: 8.9, image: "https://cdn.myanimelist.net/images/anime/1223/96586.jpg" },
        { id: 3, title: "Клинок", genres: ["Экшен", "Фэнтези"], rating: 8.5, image: "https://cdn.myanimelist.net/images/anime/1977/142649.jpg" },
        { id: 4, title: "Наруто", genres: ["Экшен", "Приключения"], rating: 8.3, image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg" },
        { id: 5, title: "Ван Пис", genres: ["Приключения", "Комедия"], rating: 8.8, image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg" }
      ],
      newAnime: [],
      trendingAnime: [],
      genres: ["Экшен", "Романтика", "Фэнтези", "Комедия", "Драма"],
      years: [2025, 2024, 2023, 2022],
      ratings: [9, 8, 7, 6],
      popularPage: 1,
      itemsPerPage: 3
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
    fetchFilteredAnime() {
      console.log('Filtering:', { genre: this.selectedGenre, year: this.selectedYear, rating: this.selectedRating, status: this.selectedStatus });
      this.newAnime = this.popularAnime.filter(anime => 
        (!this.selectedGenre || anime.genres.includes(this.selectedGenre)) &&
        (!this.selectedYear || anime.year === this.selectedYear) &&
        (!this.selectedRating || anime.rating >= this.selectedRating)
      ).slice(0, 5);
      this.trendingAnime = this.popularAnime.slice(0, 5);
    },
    prevPage(section) {
      if (section === 'popular' && this.popularPage > 1) this.popularPage--;
    },
    nextPage(section) {
      if (section === 'popular' && this.popularPage < Math.ceil(this.popularAnime.length / this.itemsPerPage)) this.popularPage++;
    }
  },
  mounted() {
    this.fetchFilteredAnime();
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
}
.popular-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}
.popular-item {
  flex-shrink: 0;
  width: 180px;
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
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
.pagination button {
  padding: 5px 10px;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.pagination button:disabled {
  background: #424242;
  cursor: not-allowed;
}
.pagination button:hover:not(:disabled) {
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
@media (max-width: 1024px) {
  .anime-blocks {
    flex-direction: column;
  }
  .block {
    width: 100%;
  }
  .popular-item {
    width: 160px;
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
    width: 150px;
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
    width: 120px;
  }
  .popular-item img {
    height: 160px;
  }
}
</style>