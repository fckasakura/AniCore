<template>
  <div id="app">
    <header>
      <h1 class="site-title" @click="$router.push('/')">AniCore</h1>
      <input 
        type="text" 
        v-model="searchQuery" 
        @input="searchAnime" 
        placeholder="Поиск..." 
        class="search-bar" 
      />
      <div class="profile-icon" @click="showProfileModal = true">👤</div>
      <div class="search-results" v-if="searchResults.length">
        <div 
          v-for="anime in searchResults" 
          :key="anime.id" 
          @click="$router.push(`/anime/${anime.id}`)" 
          class="search-item"
        >
          {{ anime.title }}
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <!-- Модалка и футер без изменений -->
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
        ).slice(0, 5); // Ограничиваем 5 результатами
      } catch (error) {
        console.error('Ошибка поиска:', error);
      }
    },
    submitProfile() {
      console.log(this.isLogin ? 'Login' : 'Register', { username: this.username, password: this.password });
      this.showProfileModal = false;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  background: #171717;
  color: #ffffff;
  min-height: 100vh;
  padding: 0 20px;
}
body {
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  background: #171717;
  border-bottom: 1px solid #e50914;
}
.site-title {
  font-size: 24px;
  color: #e50914;
  margin: 0;
}
.search-bar {
  padding: 8px 15px;
  width: 300px;
  border: 1px solid #424242;
  border-radius: 20px;
  background: #2c2c2c;
  color: #ffffff;
  font-size: 14px;
}
.search-bar::placeholder {
  color: #757575;
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
footer {
  padding: 20px 0;
  text-align: center;
  background: #171717;
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
  #app {
    padding: 0 10px;
  }
  header {
    flex-direction: column;
    padding: 10px 0;
  }
  .search-bar {
    width: 100%;
    margin: 10px 0;
  }
  .modal-content {
    width: 90%;
  }
}
@media (max-width: 480px) {
  #app {
    padding: 0 5px;
  }
  .site-title {
    font-size: 20px;
  }
  .profile-icon {
    font-size: 20px;
  }
}
</style>