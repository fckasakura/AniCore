<template>
  <div id="app">
    <Header />
    <AnimeList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AnimeList from './components/AnimeList.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    AnimeList,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
