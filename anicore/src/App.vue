<template>
  <div>
    <header>
      <h1>AniCore</h1>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/profile">Профиль</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>
