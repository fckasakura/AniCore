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
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;
  }
  .card:hover {
    transform: translateY(-3px);
  }
  .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .age {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #42a5f5;
    color: #ffffff;
    padding: 2px 5px;
    font-size: 11px;
    border-radius: 5px;
  }
  .rating {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #e0e0e0;
    color: #616161;
    padding: 2px 5px;
    font-size: 11px;
    border-radius: 5px;
  }
  .title {
    text-align: center;
    margin: 5px 0;
    font-weight: 600;
    color: #616161;
    font-size: 13px;
  }
  .info {
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    color: #616161;
    width: 100%;
    padding: 5px;
    font-size: 12px;
    border-radius: 0 0 10px 10px;
  }
  </style>