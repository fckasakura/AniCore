<template>
  <div class="home">
    <section class="banner">
      <img src="https://media4.giphy.com/media/fS4cWezsJoXPYzLR45/giphy.gif" alt="Spring Anime 2025 Banner" />
      <h2>Весенний сезон аниме 2025</h2>
    </section>

    <section class="filters">
      <select v-model="selectedGenre">
        <option value="">Все жанры</option>
        <option value="action">Экшен</option>
        <option value="romance">Романтика</option>
        <option value="fantasy">Фэнтези</option>
        <option value="comedy">Комедия</option>
      </select>
      <select v-model="selectedYear">
        <option value="">Все годы</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
      </select>
      <select v-model="selectedRating">
        <option value="">Любой рейтинг</option>
        <option value="8+">8+</option>
        <option value="7+">7+</option>
        <option value="6+">6+</option>
      </select>
      <button class="filter-btn">Применить</button>
    </section>

    <section class="anime-blocks">
      <div class="block">
        <h3>Новые аниме</h3>
        <div class="card-list">
          <AnimeCard v-for="i in 5" :key="i" />
        </div>
      </div>
      <div class="block">
        <h3>Сейчас смотрят</h3>
        <div class="card-list">
          <AnimeCard v-for="i in 5" :key="i" />
        </div>
      </div>
    </section>

    <button class="all-anime-btn">Все аниме</button>

    <section class="collections">
      <h3>Коллекции аниме</h3>
      <div class="collection-list">
        <div class="collection">Спортивные</div>
        <div class="collection">Боевики</div>
        <div class="collection">Медики</div>
        <div class="collection">Романтика</div>
        <div class="collection">Фэнтези</div>
        <div class="collection">Комедии</div>
      </div>
    </section>

    <section class="about">
      <h3>О сайте</h3>
      <div class="about-content">
        <p>Этот сайт — мой дипломный проект, созданный для удобного поиска и просмотра аниме. Здесь вы найдёте новинки, популярные тайтлы и тематические коллекции, чтобы легко выбрать, что посмотреть.</p>
        <p>Все данные собраны вручную или через открытые API. Функционал включает фильтры по жанрам, годам и рейтингам, а также возможность отмечать просмотренное в профиле. Никакой коммерции — только любовь к аниме!</p>
        <p>Если у вас есть предложения или вы заметили ошибку, пишите на почту. Планирую добавить больше функций, вроде рекомендаций и отзывов, так что следите за обновлениями!</p>
      </div>
    </section>
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
      selectedRating: ''
    };
  }
};
</script>

<style scoped>
.home {
  padding: 0;
  background: #f5f5f5;
  color: #616161;
}
.banner {
  position: relative;
  text-align: center;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}
.banner img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.banner h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  color: #42a5f5;
  background: rgba(255, 255, 255, 0.85);
  padding: 8px 16px;
  border-radius: 10px;
}
.filters {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}
.filters select {
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #ffffff;
  color: #616161;
  font-size: 14px;
}
.filter-btn {
  padding: 8px 16px;
  background: #42a5f5;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}
.filter-btn:hover {
  background: #1976d2;
}
.anime-blocks {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.block {
  width: 49%;
}
.block h3 {
  color: #42a5f5;
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
  padding: 10px 25px;
  background: #42a5f5;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s;
}
.all-anime-btn:hover {
  background: #1976d2;
}
.collections {
  padding: 20px;
}
.collections h3 {
  color: #42a5f5;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
}
.collection-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
.collection {
  flex: 1 1 calc(16% - 10px);
  padding: 10px;
  background: #ffffff;
  color: #616161;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
}
.collection:hover {
  background: #e0e0e0;
}
.about {
  padding: 20px;
}
.about h3 {
  color: #42a5f5;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
}
.about-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.about-content p {
  flex: 1;
  background: #ffffff;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  color: #616161;
  font-size: 14px;
}
</style>