<template>
  <div class="card" @mouseover="showInfo = true" @mouseleave="showInfo = false">
    <img :src="anime.image" :alt="anime.title" loading="lazy" />
    <span class="age">{{ anime.age || '16+' }}</span>
    <span class="rating">{{ anime.rating }}</span>
    <p class="title">{{ anime.title }}</p>
    <div v-if="showInfo" class="info">
      <p>Жанр: {{ anime.genres.join(', ') }}</p>
      <p>Серии: {{ anime.episodes || 25 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  data() {
    return { showInfo: false };
  }
};
</script>

<style scoped>
.card {
  position: relative;
  width: 150px;
  flex-shrink: 0;
  background: #212121;
  border: 1px solid #424242;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}
.card:hover {
  transform: scale(1.03);
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.age {
  position: absolute;
  top: 8px;
  left: 8px;
  background: #e50914;
  color: #ffffff;
  padding: 2px 5px;
  font-size: 11px;
  border-radius: 5px;
}
.rating {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #424242;
  color: #ffffff;
  padding: 2px 5px;
  font-size: 11px;
  border-radius: 5px;
}
.title {
  text-align: center;
  margin: 5px 0;
  font-weight: 600;
  color: #ffffff;
  font-size: 13px;
}
.info {
  position: absolute;
  bottom: 0;
  background: rgba(33, 33, 33, 0.9);
  color: #ffffff;
  width: 100%;
  padding: 5px;
  font-size: 12px;
  border-radius: 0 0 10px 10px;
}
@media (max-width: 768px) {
  .card {
    width: 120px;
  }
  .card img {
    height: 160px;
  }
  .title {
    font-size: 12px;
  }
}
@media (max-width: 480px) {
  .card {
    width: 100px;
  }
  .card img {
    height: 140px;
  }
  .title {
    font-size: 11px;
  }
}
</style>