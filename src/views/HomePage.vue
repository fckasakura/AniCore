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

    <section class="announcements">
      <h3>Анонсы</h3>
      <div class="announcement-list">
        <div class="announcement">
          <img src="https://cdn.myanimelist.net/images/anime/1568/141242.jpg" alt="Anime 1" />
          <p>Скоро: "Аниме 2025"</p>
        </div>
        <div class="announcement">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
          <p>Трейлер: "Рикролл"</p>
        </div>
      </div>
    </section>

    <section class="season-highlights">
      <h3>Сезонные хайлайты</h3>
      <div class="highlight-list">
        <div class="highlight">
          <img src="https://cdn.myanimelist.net/images/anime/1977/142649.jpg" alt="Anime 1" />
          <p>Невероятное аниме 1</p>
        </div>
        <div class="highlight">
          <img src="https://cdn.myanimelist.net/images/anime/1350/141089.jpg" alt="Anime 2" />
          <p>Невероятное аниме 2</p>
        </div>
        <div class="highlight">
          <img src="https://cdn.myanimelist.net/images/anime/1935/127974.jpg" alt="Anime 3" />
          <p>Невероятное аниме 3</p>
        </div>
      </div>
    </section>

    <section class="popular">
      <h3>Популярное</h3>
      <div class="popular-list">
        <div class="popular-item" v-for="i in 5" :key="'popular-' + i">
          <img src="https://cdn.myanimelist.net/images/anime/1208/94706.jpg" alt="Popular Anime" />
          <div class="popular-info">
            <h4>Атака титанов</h4>
            <p>Экшен, Драма • 8.7</p>
          </div>
        </div>
      </div>
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
          <AnimeCard v-for="i in 5" :key="i + 5" />
        </div>
      </div>
    </section>

    <section class="reviews">
      <h3>Последние отзывы</h3>
      <div class="review-list">
        <div class="review">
          <p>"Атака титанов — шедевр!"</p>
          <span>— User123</span>
        </div>
        <div class="review">
          <p>"Слишком много филлеров."</p>
          <span>— AnimeFan</span>
        </div>
      </div>
    </section>

    <section class="daily-recommendation">
      <h3>Рекомендация дня</h3>
      <div class="recommendation">
        <img src="https://cdn.myanimelist.net/images/anime/1223/96586.jpg" alt="Recommendation" />
        <div class="recommendation-info">
          <h4>Евангелион</h4>
          <p>Меха, Психология • 8.9</p>
          <button class="watch-btn">Смотреть</button>
        </div>
      </div>
    </section>

    <button class="all-anime-btn">Все аниме</button>

    <section class="collections">
      <h3>Быстрые ссылки на жанры</h3>
      <div class="collection-list">
        <div class="collection"><span>🏀</span> Спортивные</div>
        <div class="collection"><span>⚔️</span> Боевики</div>
        <div class="collection"><span>🏥</span> Медики</div>
        <div class="collection"><span>❤️</span> Романтика</div>
        <div class="collection"><span>✨</span> Фэнтези</div>
        <div class="collection"><span>😂</span> Комедии</div>
        <div class="collection"><span>🎭</span> Драма</div>
      </div>
    </section>

    <section class="news">
      <h3>Новости аниме</h3>
      <div class="news-list">
        <p>20.02.2025: Вышла новая серия "Атака титанов"</p>
        <p>19.02.2025: Анонсирован второй сезон "Фэнтези X"</p>
      </div>
    </section>

    <section class="social">
      <h3>Поделиться</h3>
      <div class="social-links">
        <a href="#" class="social-link">📱 Telegram</a>
        <a href="#" class="social-link">🐦 Twitter</a>
        <a href="#" class="social-link">📷 Instagram</a>
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
.announcements {
  padding: 20px 0;
}
.announcements h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 15px;
}
.announcement-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}
.announcement {
  flex-shrink: 0;
  width: 200px;
  text-align: center;
}
.announcement img, .announcement iframe {
  width: 100%;
  height: 150px;
  border-radius: 10px;
}
.announcement p {
  margin: 5px 0;
  font-size: 14px;
}
.season-highlights {
  padding: 20px 0;
}
.season-highlights h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 15px;
}
.highlight-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}
.highlight {
  flex-shrink: 0;
  width: 200px;
  text-align: center;
}
.highlight img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}
.highlight p {
  margin: 5px 0;
  font-size: 14px;
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
.reviews {
  padding: 20px 0;
}
.reviews h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 15px;
}
.review-list {
  display: flex;
  gap: 20px;
}
.review {
  background: #212121;
  padding: 15px;
  border: 1px solid #424242;
  border-radius: 10px;
  flex: 1;
}
.review p {
  margin: 0 0 5px;
  font-size: 14px;
}
.review span {
  color: #757575;
  font-size: 12px;
}
.daily-recommendation {
  padding: 20px 0;
}
.daily-recommendation h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 15px;
}
.recommendation {
  display: flex;
  gap: 20px;
  background: #212121;
  padding: 15px;
  border: 1px solid #424242;
  border-radius: 10px;
}
.recommendation img {
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
.recommendation-info {
  flex: 1;
}
.recommendation-info h4 {
  margin: 0 0 5px;
  font-size: 16px;
}
.recommendation-info p {
  margin: 0 0 10px;
  font-size: 14px;
  color: #757575;
}
.watch-btn {
  padding: 8px 15px;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}
.watch-btn:hover {
  background: #b2070f;
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
  padding: 20px 0;
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
.collection span {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}
.collection:hover {
  background: #e50914;
}
.news {
  padding: 20px 0;
}
.news h3 {
  color: #e50914;
  font-size: 20px;
  margin-bottom: 15px;
}
.news-list {
  background: #212121;
  padding: 15px;
  border: 1px solid #424242;
  border-radius: 10px;
}
.news-list p {
  margin: 5px 0;
  font-size: 14px;
}
.social {
  padding: 20px 0;
}
.social h3 {
  color: #e50914;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
}
.social-links {
  display: flex;
  gap: 15px;
  justify-content: center;
}
.social-link {
  padding: 8px 15px;
  background: #2c2c2c;
  color: #ffffff;
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.3s;
}
.social-link:hover {
  background: #e50914;
}
.about {
  padding: 20px 0;
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
  .popular-item {
    width: 160px;
  }
  .highlight, .announcement {
    width: 180px;
  }
  .collection {
    flex: 1 1 calc(33% - 10px);
  }
  .recommendation {
    flex-direction: column;
  }
  .recommendation img {
    width: 100%;
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
  .popular-item, .highlight, .announcement {
    width: 150px;
  }
  .review-list {
    flex-direction: column;
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
  .block h3, .season-highlights h3, .popular h3, .reviews h3, .daily-recommendation h3, .news h3, .social h3 {
    font-size: 18px;
  }
  .popular-item, .highlight, .announcement {
    width: 120px;
  }
  .popular-item img, .highlight img {
    height: 160px;
  }
  .recommendation img {
    height: 180px;
  }
  .collection {
    flex: 1 1 100%;
  }
  .social-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>