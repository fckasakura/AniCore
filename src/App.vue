<template>
  <div id="app">
    <header>
      <h1 class="site-title">AniCore</h1>
      <input type="text" placeholder="Поиск..." class="search-bar" />
      <div class="profile-icon">👤</div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Сайт создан как дипломный проект. Никаких денег я не получаю. Если что-то нарушает авторские права, пишите на почту: example@mail.com</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  background: #171717;
  color: #ffffff;
  min-height: 100vh;
  padding: 0 20px; /* Отступы слева и справа */
}
body {
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0; /* Убраны боковые отступы, теперь от родителя */
  background: #212121;
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
  padding: 20px 0; /* Убраны боковые отступы */
  text-align: center;
  background: #212121;
  color: #757575;
  border-top: 1px solid #e50914;
}

/* Адаптивность */
@media (max-width: 768px) {
  #app {
    padding: 0 10px; /* Уменьшаем отступы на планшетах */
  }
  header {
    flex-direction: column;
    padding: 10px 0;
  }
  .search-bar {
    width: 100%;
    margin: 10px 0;
  }
}
@media (max-width: 480px) {
  #app {
    padding: 0 5px; /* Ещё меньше на телефонах */
  }
  .site-title {
    font-size: 20px;
  }
  .profile-icon {
    font-size: 20px;
  }
}
</style>