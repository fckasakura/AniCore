<template>
    <div class="home">
      <!-- Баннер -->
      <section class="banner">
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnp5cHFndzFnaXQ3eTBzYWhhaXhvN3phNG1lZW45ang2NWpyZDBpYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fS4cWezsJoXPYzLR45/giphy.gif" alt="Spring Anime 2025 Banner" />
        <h2>Весенний сезон аниме 2025</h2>
      </section>
  
      <!-- Блоки аниме -->
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
  }
  .banner {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  .banner img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    filter: brightness(60%);
  }
  .banner h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background: rgba(0, 0, 0, 0.7);
    padding: 15px 30px;
    border-radius: 10px;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .anime-blocks {
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
  }
  .block {
    width: 48%;
  }
  .card-list {
    display: flex;
    overflow-x: auto;
    gap: 10px;
  }
  .all-anime-btn {
    display: block;
    margin: 20px auto;
    padding: 12px 30px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  .all-anime-btn:hover {
    background-color: #c0392b;
  }
  .collections h3, .about h3 {
    text-align: center;
  }
  .collection-list {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  .collection {
    padding: 15px 25px;
    background-color: #3498db;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .collection:hover {
    transform: translateY(-5px);
  }
  .about-content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .about-content p {
    width: 30%;
    background: #ecf0f1;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>