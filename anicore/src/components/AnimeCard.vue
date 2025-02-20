<template>
    <div class="anime-card">
      <img src="https://via.placeholder.com/150" alt="Anime Image" />
      <div class="info">
        <span class="age">18+</span>
        <span class="rating">8.5</span>
      </div>
      <h4>Название аниме</h4>
    </div>
  </template>
  
  <style scoped>
  .anime-card {
    width: 150px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #f5f5f5;
    transition: 0.3s;
    text-align: center;
  }
  
  .anime-card:hover {
    transform: scale(1.05);
  }
  
  .anime-card img {
    width: 100%;
    border-radius: 10px;
  }
  
  .info {
    position: absolute;
    top: 5px;
    left: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .age {
    background: red;
    color: white;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 3px;
  }
  
  .rating {
    background: green;
    color: white;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 3px;
    position: absolute;
    right: 5px;
  }
  
  h4 {
    text-align: center;
    margin-top: 5px;
  }
  </style>
  