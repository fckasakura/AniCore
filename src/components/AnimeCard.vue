<template>
    <div class="card" @mouseover="showInfo = true" @mouseleave="showInfo = false">
      <img src="https://cdn.myanimelist.net/images/anime/1208/94706.jpg" alt="Anime Poster" />
      <span class="age">16+</span>
      <span class="rating">8.7</span>
      <p class="title">Атака титанов</p>
      <div v-if="showInfo" class="info">
        <p>Жанр: Экшен, Драма</p>
        <p>Серии: 25</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { showInfo: false };
    }
  };
  </script>
  
  <style scoped>
  .card {
    position: relative;
    width: 140px;
    flex-shrink: 0;
    transition: all 0.3s;
    border: 2px solid transparent;
  }
  .card:hover {
    transform: scale(1.05);
    border-color: #ff69b4;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }
  .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .age {
    position: absolute;
    top: 5px;
    left: 5px;
    background: #ff69b4;
    color: #1a1a1a;
    padding: 3px 6px;
    font-size: 12px;
  }
  .rating {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #8a2be2;
    color: #fff;
    padding: 3px 6px;
    font-size: 12px;
  }
  .title {
    text-align: center;
    margin: 5px 0;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
  .info {
    position: absolute;
    bottom: 0;
    background: rgba(26, 26, 26, 0.9);
    color: #ff69b4;
    width: 100%;
    padding: 5px;
  }
  </style>