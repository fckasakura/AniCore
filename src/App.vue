<template>
  <div id="app">
    <header>
      <h1 class="site-title" @click="$router.push('/')">AniCore</h1>
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="searchAnime" 
          placeholder="Поиск..." 
          class="search-bar" 
        />
        <div class="search-results" v-if="searchResults.length">
          <div 
            v-for="anime in searchResults" 
            :key="anime.id" 
            @click="goToAnime(anime.id)" 
            class="search-item"
          >
            <img :src="anime.image" :alt="anime.title" class="search-image" />
            <span class="search-title">{{ anime.title }}</span>
          </div>
        </div>
      </div>
      <div class="profile-icon" @click="showProfileModal = true">👤</div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Сайт создан как дипломный проект. Никаких денег я не получаю. Если что-то нарушает авторские права, пишите на почту: example@mail.com</p>
    </footer>

    <div class="modal" v-if="showProfileModal" @click.self="showProfileModal = false">
      <div class="modal-content">
        <h3>{{ isLogin ? 'Вход' : 'Регистрация' }}</h3>
        <input type="text" v-model="username" placeholder="Логин" class="modal-input" />
        <input type="password" v-model="password" placeholder="Пароль" class="modal-input" />
        <button class="modal-btn" @click="submitProfile">{{ isLogin ? 'Войти' : 'Зарегистрироваться' }}</button>
        <p class="switch" @click="isLogin = !isLogin">
          {{ isLogin ? 'Нет аккаунта? Регистрация' : 'Уже есть аккаунт? Вход' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      showProfileModal: false,
      isLogin: true,
      username: '',
      password: ''
    };
  },
  methods: {
    async searchAnime() {
      if (!this.searchQuery) {
        this.searchResults = [];
        return;
      }
      try {
        const response = await axios.get('https://8fa4112ec6cc62ee.mokky.dev/Anime');
        this.searchResults = response.data.filter(anime =>
          anime.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        ).slice(0, 5);
      } catch (error) {
        console.error('Ошибка поиска:', error);
      }
    },
    goToAnime(id) {
      this.$router.push(`/anime/${id}`);
      this.searchQuery = ''; // Очищаем поиск
      this.searchResults = []; // Убираем результаты
    },
    submitProfile() {
      console.log(this.isLogin ? 'Login' : 'Register', { username: this.username, password: this.password });
      this.showProfileModal = false;
    }
  }
};
</script>

<style>
/* Убираем отступы */
body {
  margin: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
  background: #171717;
  color: #ffffff;
  min-height: 100vh;
  padding: 0; /* Убрали padding */
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px; /* Отступы внутри хедера */
  background: #212121;
  border-bottom: 1px solid #e50914;
  position: relative;
}
.site-title {
  font-size: 24px;
  color: #e50914;
  margin: 0;
  cursor: pointer;
}
.search-container {
  position: relative;
  flex: 1;
  max-width: 300px;
}
.search-bar {
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #424242;
  border-radius: 20px;
  background: #2c2c2c;
  color: #ffffff;
  font-size: 14px;
}
.search-bar::placeholder {
  color: #757575;
}
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #212121;
  border: 1px solid #424242;
  border-radius: 10px;
  margin-top: 5px;
  z-index: 1000;
}
.search-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #424242;
}
.search-item:last-child {
  border-bottom: none;
}
.search-item:hover {
  background: #e50914;
}
.search-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}
.search-title {
  font-size: 14px;
  color: #ffffff;
}
.profile-icon {
  font-size: 24px;
  color: #e50914;
  cursor: pointer;
  transition: color 0.3s;
}
.profile-icon:hover {
  color: #ffffff;
}
main {
  padding: 0; /* Убираем отступы в main */
}
footer {
  padding: 20px;
  text-align: center;
  background: #212121;
  color: #757575;
  border-top: 1px solid #e50914;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: #212121;
  padding: 20px;
  border: 1px solid #e50914;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
.modal-content h3 {
  color: #e50914;
  margin-bottom: 15px;
}
.modal-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #424242;
  border-radius: 10px;
  background: #2c2c2c;
  color: #ffffff;
  font-size: 14px;
}
.modal-btn {
  padding: 8px 15px;
  background: #e50914;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}
.modal-btn:hover {
  background: #b2070f;
}
.switch {
  color: #757575;
  cursor: pointer;
  margin-top: 10px;
  transition: color 0.3s;
}
.switch:hover {
  color: #e50914;
}

/* Адаптивность */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 10px;
  }
  .search-container {
    width: 100%;
    margin: 10px 0;
  }
  .modal-content {
    width: 90%;
  }
}
@media (max-width: 480px) {
  .site-title {
    font-size: 20px;
  }
  .profile-icon {
    font-size: 20px;
  }
}
</style>