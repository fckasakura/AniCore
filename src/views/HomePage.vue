<template>
  <div class="home">
    <section class="banner">
      <img src="https://media4.giphy.com/media/fS4cWezsJoXPYzLR45/giphy.gif" alt="Spring Anime 2025 Banner" />
      <h2>Весенний сезон аниме 2025</h2>
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
      </div>
    </section>

    <section class="about">
      <h3>О сайте</h3>
      <div class="about-content">
        <p>Часть 1: Это сайт про аниме.</p>
        <p>Часть 2: Тут можно смотреть и искать.</p>
        <p>Часть 3: Надеюсь, вам понравится!</p>
      </div>
    </section>
  </div>
</template>

<script>
import AnimeCard from '@/components/AnimeCard.vue';

export default {
  components: { AnimeCard }
};
</script>

<style scoped>
.home {
  padding: 20px;
  background: #1a1a1a url('https://www.transparenttextures.com/patterns/dark-mosaic.png'); /* Тёмный фон с паттерном */
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
}

/* Баннер */
.banner {
  position: relative;
  text-align: center;
  overflow: hidden;
}
.banner img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  filter: brightness(80%);
  border-bottom: 2px solid #ff69b4;
}
.banner h2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  background: linear-gradient(45deg, #ff69b4, #8a2be2);
  -webkit-background-clip: text;
  color: transparent;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
}

/* Блоки аниме */
.anime-blocks {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}
.block {
  width: 48%;
}
.block h3 {
  color: #ff69b4;
  font-size: 24px;
  text-transform: uppercase;
}
.card-list {
  display: flex;
  overflow-x: auto;
  gap: 15px;
}

/* Кнопка */
.all-anime-btn {
  display: block;
  margin: 20px auto;
  padding: 12px 30px;
  background: linear-gradient(45deg, #ff69b4, #8a2be2);
  color: white;
  border: none;
  border-radius: 0;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.all-anime-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 105, 180, 0.7);
}

/* Коллекции */
.collections h3 {
  color: #8a2be2;
  text-align: center;
  font-size: 24px;
}
.collection-list {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.collection {
  padding: 15px 25px;
  background: #2c2c2c;
  color: #ff69b4;
  border: 1px solid #8a2be2;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s;
}
.collection:hover {
  background: #ff69b4;
  color: #1a1a1a;
  border-color: #ff69b4;
}

/* О сайте */
.about h3 {
  color: #ff69b4;
  text-align: center;
  font-size: 24px;
}
.about-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.about-content p {
  width: 30%;
  background: #2c2c2c;
  padding: 15px;
  border: 1px solid #8a2be2;
  color: #fff;
}
</style>