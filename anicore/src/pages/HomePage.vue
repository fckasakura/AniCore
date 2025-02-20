<template>
    <div class="home">
      <header class="header">
        <h1>AniCore</h1>
        <input type="text" placeholder="Поиск аниме..." />
        <router-link to="/profile">👤</router-link>
      </header>
  
      <section class="banner">
        <img src="@/assets/banner.gif" alt="Весенний сезон 2025" />
        <h2>Весенний сезон аниме 2025</h2>
      </section>
  
      <section class="anime-blocks">
  <div class="block">
    <h3>Популярные аниме</h3>
    <div class="anime-list">
      <AnimeCard v-for="n in 5" :key="n" />
    </div>
  </div>

  <div class="block">
    <h3>Новинки</h3>
    <div class="anime-list">
      <AnimeCard v-for="n in 5" :key="n + 5" />
    </div>
  </div>
</section>


  
      <section class="categories">
        <h3>Коллекции</h3>
        <div class="category-list">
          <span>Боевики</span>
          <span>Фэнтези</span>
          <span>Комедия</span>
          <span>Драма</span>
        </div>
      </section>
  
      <footer>
        <p>Сайт создан для дипломного проекта. Если есть жалобы — пишите на почту.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import AnimeCard from '@/components/AnimeCard.vue';
  
  export default {
    components: { AnimeCard },
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .banner {
    text-align: center;
  }
  
  .anime-blocks {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.block {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}



  .anime-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
}
  
  .category-list {
    display: flex;
    gap: 10px;
  }
  
  footer {
    text-align: center;
    padding: 20px;
  }
  </style>
  