<template>
    <header>
      <nav>
        <div class="logo">
          <svg class="anicore-logo" width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="#000000"/>
            <path d="M16 8L20 12L16 16L12 12L16 8Z" fill="white"/>
            <path d="M16 16L20 20L16 24L12 20L16 16Z" fill="white"/>
            <circle cx="16" cy="16" r="2" fill="white"/>
          </svg>
          <h1>AniCore</h1>
        </div>
        <div class="search">
          <input type="text" placeholder="Поиск аниме...">
          <button><i class="fas fa-search"></i></button>
        </div>
        <div class="profile">
          <i class="fas fa-user"></i>
          <span>Профиль</span>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>
  
  <style scoped>
  header {
    background-color: var(--surface);
    padding: var(--spacing);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .logo h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
  }
  
  .search {
    display: flex;
    gap: 0.5rem;
    flex: 0 1 400px;
  }
  
  .search input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    background: white;
    color: var(--text);
    transition: border-color 0.2s;
  }
  
  .search input:focus {
    border-color: var(--primary);
    outline: none;
  }
  
  .search button {
    background: var(--primary);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .search button:hover {
    transform: scale(1.05);
  }
  
  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  </style>
  