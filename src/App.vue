<template>
  <div id="app">
    <header>
      <h1 class="site-title">AniCore</h1>
      <input type="text" placeholder="Поиск аниме..." class="search-bar" />
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
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}
body {
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.site-title {
  font-size: 28px;
  margin: 0;
}
.search-bar {
  padding: 8px;
  width: 300px;
  border: none;
  border-radius: 20px;
  background-color: #34495e;
  color: white;
}
.search-bar::placeholder {
  color: #bdc3c7;
}
.profile-icon {
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s;
}
.profile-icon:hover {
  transform: scale(1.1);
}
footer {
  padding: 20px;
  text-align: center;
  background-color: #ecf0f1;
  margin-top: 40px;
}
</style>