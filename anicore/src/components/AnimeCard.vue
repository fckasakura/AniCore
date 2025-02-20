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
    return {
      showInfo: false
    };
  }
};
</script>

<style scoped>
.card {
  position: relative;
  width: 150px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.age {
  position: absolute;
  top: 5px;
  left: 5px;
  background: #e74c3c;
  color: white;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 3px;
}
.rating {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #f1c40f;
  color: black;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 3px;
}
.title {
  text-align: center;
  margin: 5px 0;
  font-weight: bold;
  color: #2c3e50;
}
.info {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  width: 100%;
  padding: 5px;
  border-radius: 0 0 8px 8px;
}
</style>