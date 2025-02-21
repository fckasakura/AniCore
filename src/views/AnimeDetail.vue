<template>
    <div class="anime-detail" :style="{ backgroundImage: `url(${anime.backgroundImage})` }">
      <div class="container" v-if="anime && Object.keys(anime).length">
        <h2>{{ anime.title }}</h2>
        <div class="content">
          <div class="poster">
            <img :src="anime.image" :alt="anime.title" loading="lazy" />
          </div>
          <div class="info">
            <p><strong>Рейтинг:</strong> {{ anime.rating }} (MAL: {{ anime.ratings?.MAL || 'N/A' }})</p>
            <p><strong>Возраст:</strong> {{ anime.ageRestriction }}</p>
            <p><strong>Эпизоды:</strong> {{ anime.episodes }}</p>
            <p><strong>Жанры:</strong> {{ anime.genres ? anime.genres.join(', ') : 'Не указаны' }}</p>
            <p><strong>Статус:</strong> {{ anime.status === 'ongoing' ? 'Онгоинг' : 'Завершён' }}</p>
            <p><strong>Дата выхода:</strong> {{ anime.releaseDate }}</p>
            <p><strong>Студия:</strong> {{ anime.studio }}</p>
            <p><strong>Длительность:</strong> {{ anime.duration }}</p>
            <p><strong>Источник:</strong> {{ anime.source }}</p>
            <p><strong>Сезон:</strong> {{ anime.season }}</p>
            <p><strong>Теги:</strong> {{ anime.tags ? anime.tags.join(', ') : 'Нет' }}</p>
            <p><strong>Режиссёр:</strong> {{ anime.director }}</p>
            <p><strong>Описание:</strong> {{ anime.description }}</p>
            <p><strong>Сэйю:</strong> {{ anime.voiceActors ? anime.voiceActors.map(va => `${va.character} (${va.actor})`).join(', ') : 'Не указаны' }}</p>
            <a v-if="anime.trailer" :href="anime.trailer" target="_blank" class="trailer-btn">Трейлер</a>
          </div>
        </div>
        <div class="player-section">
          <h3>Серии</h3>
          <div class="episodes">
            <button 
              v-for="ep in anime.episodesList" 
              :key="ep.episode" 
              @click="selectedEpisode = ep.videoLink" 
              :class="{ active: selectedEpisode === ep.videoLink }"
            >
              Серия {{ ep.episode }}: {{ ep.title || '' }}
            </button>
          </div>
          <div class="player">
            <video v-if="selectedEpisode" controls>
              <source :src="selectedEpisode" type="video/mp4">
              Ваш браузер не поддерживает видео.
            </video>
            <p v-else>Выберите серию для просмотра</p>
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
        anime: {},
        selectedEpisode: null
      };
    },
    methods: {
      async fetchAnime() {
        try {
          const id = this.$route.params.id;
          const response = await axios.get(`https://8fa4112ec6cc62ee.mokky.dev/Anime/${id}`);
          this.anime = response.data;
          this.selectedEpisode = this.anime.episodesList ? this.anime.episodesList[0].videoLink : null;
        } catch (error) {
          console.error('Ошибка загрузки аниме:', error);
          this.$router.push('/');
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
    background-size: cover;
    background-position: center;
    color: #ffffff;
    padding: 20px 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: rgba(23, 23, 23, 0.8);
    padding: 20px;
    border-radius: 10px;
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
  .trailer-btn {
    display: inline-block;
    padding: 8px 15px;
    background: #e50914;
    color: #ffffff;
    text-decoration: none;
    border-radius: 10px;
    transition: background 0.3s;
  }
  .trailer-btn:hover {
    background: #b2070f;
  }
  .player-section {
    margin-top: 20px;
  }
  .player-section h3 {
    color: #e50914;
    font-size: 20px;
    margin-bottom: 10px;
  }
  .episodes {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }
  .episodes button {
    padding: 8px 15px;
    background: #2c2c2c;
    color: #ffffff;
    border: 1px solid #424242;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .episodes button.active, .episodes button:hover {
    background: #e50914;
  }
  .player video {
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
    .player video {
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
    .episodes button {
      padding: 6px 10px;
      font-size: 12px;
    }
  }
  </style>