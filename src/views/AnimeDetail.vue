<template>
    <div class="anime-detail">
      <div class="container" v-if="anime && Object.keys(anime).length">
        <h2>{{ anime.title }}</h2>
        <div class="content">
          <div class="poster">
            <img :src="anime.image" :alt="anime.title" loading="lazy" />
          </div>
          <div class="info">
            <p><strong>Рейтинг:</strong> {{ anime.rating }}</p>
            <p><strong>Возраст:</strong> {{ anime.ageRestriction }}</p>
            <p><strong>Эпизоды:</strong> {{ anime.episodes }}</p>
            <p><strong>Жанры:</strong> {{ anime.genres ? anime.genres.join(', ') : 'Не указаны' }}</p>
            <p><strong>Статус:</strong> {{ anime.status === 'ongoing' ? 'Онгоинг' : 'Завершён' }}</p>
            <p><strong>Описание:</strong> {{ anime.description }}</p>
            <div class="video">
              <iframe v-if="anime.videoLink" :src="anime.videoLink" frameborder="0" allowfullscreen></iframe>
              <p v-else>Видео скоро будет добавлено!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <p>Загрузка...</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        anime: {}
      };
    },
    methods: {
      async fetchAnime() {
        try {
          const id = this.$route.params.id;
          const response = await axios.get(`https://8fa4112ec6cc62ee.mokky.dev/Anime/${id}`);
          this.anime = response.data;
        } catch (error) {
          console.error('Ошибка загрузки аниме:', error);
          this.$router.push('/'); // Если ошибка, кидаем на главную
        }
      }
    },
    mounted() {
      this.fetchAnime();
    }
  };
  </script>
  
  <style scoped>
  .anime-detail {
    background: #171717;
    color: #ffffff;
    padding: 20px 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h2 {
    color: #e50914;
    font-size: 28px;
    text-align: center;
  }
  .content {
    display: flex;
    gap: 20px;
  }
  .poster img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
  .info {
    flex: 1;
  }
  .info p {
    margin: 10px 0;
    font-size: 16px;
  }
  .info strong {
    color: #e50914;
  }
  .video iframe {
    width: 100%;
    height: 400px;
    border-radius: 10px;
  }
  
  /* Адаптивность */
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
    }
    .poster img {
      width: 100%;
      height: auto;
    }
    .video iframe {
      height: 200px;
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 22px;
    }
    .info p {
      font-size: 14px;
    }
  }
  </style>