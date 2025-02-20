<template>
  <div class="home">
    <section class="banner">
      <img src="https://media4.giphy.com/media/fS4cWezsJoXPYzLR45/giphy.gif" alt="Spring Anime 2025 Banner" />
      <h2>Весенний сезон аниме 2025</h2>
    </section>

    <section class="filters">
      <select v-model="selectedGenre">
        <option value="">Жанр</option>
        <option value="action">Экшен</option>
        <option value="romance">Романтика</option>
        <option value="fantasy">Фэнтези</option>
        <option value="comedy">Комедия</option>
        <option value="drama">Драма</option>
      </select>
      <select v-model="selectedYear">
        <option value="">Год</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
      </select>
      <select v-model="selectedRating">
        <option value="">Рейтинг</option>
        <option value="9+">9+</option>
        <option value="8+">8+</option>
        <option value="7+">7+</option>
        <option value="6+">6+</option>
      </select>
      <select v-model="selectedStatus">
        <option value="">Статус</option>
        <option value="ongoing">Онгоинг</option>
        <option value="completed">Завершён</option>
      </select>
      <button class="filter-btn">Фильтр</button>
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
        <div class="collection">Драма</div>
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
      selectedRating: '',
      selectedStatus: ''
    };
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
}
.filters {
  display: flex;
  gap: 10px;
  padding: 15px 0; /* Отступы от родителя */
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
.anime-blocks {
  display: flex;
  justify-content: space-between;
  padding: 20px 0; /* Отступы от родителя */
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
  transition: background 0.3s;
}
.all-anime-btn:hover {
  background: #b2070f;
}
.collections {
  padding: 20px 0; /* Отступы от родителя */
}
.collections h3 {
  color: #e50914;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
}
.collection-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
}
.collection {
  flex: 1 1 calc(14% - 10px);
  padding: 10px;
  background: #212121;
  border: 1px solid #424242;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s;
}
.collection:hover {
  background: #e50914;
}
.about {
  padding: 20px 0; /* Отступы от родителя */
}
.about h3 {
  color: #e50914;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
}
.about-content {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.about-content p {
  flex: 1;
  background: #212121;
  padding: 15px;
  border: 1px solid #424242;
  border-radius: 10px;
  font-size: 14px;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .anime-blocks {
    flex-direction: column;
  }
  .block {
    width: 100%;
  }
  .collection {
    flex: 1 1 calc(33% - 10px);
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
  .collection {
    flex: 1 1 calc(50% - 10px);
  }
  .about-content {
    flex-direction: column;
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
  .block h3 {
    font-size: 18px;
  }
  .collection {
    flex: 1 1 100%;
  }
}
</style>