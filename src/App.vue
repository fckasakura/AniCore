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
  font-family: 'Open Sans', sans-serif;
  background: #f5f5f5;
  min-height: 100vh;
}
body {
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}
.site-title {
  font-size: 24px;
  color: #42a5f5;
  margin: 0;
}
.search-bar {
  padding: 8px;
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  background: #ffffff;
  color: #616161;
  font-size: 14px;
}
.search-bar::placeholder {
  color: #bdbdbd;
}
.profile-icon {
  font-size: 22px;
  color: #42a5f5;
  cursor: pointer;
  transition: color 0.3s;
}
.profile-icon:hover {
  color: #1976d2;
}
footer {
  padding: 20px;
  text-align: center;
  background: #ffffff;
  color: #616161;
  border-top: 1px solid #e0e0e0;
}
</style>