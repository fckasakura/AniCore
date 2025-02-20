<template>
    <main>
      <Filters />
      <SeasonBanner />
      <LatestUpdates />
      <FeaturedTags />
      <PopularGenres />
      <PopularCollections />
    </main>
  </template>
  
  <script>
  import Filters from './Filters.vue'
  import SeasonBanner from './SeasonBanner.vue'
  import LatestUpdates from './LatestUpdates.vue'
  import FeaturedTags from './FeaturedTags.vue'
  import PopularGenres from './PopularGenres.vue'
  import PopularCollections from './PopularCollections.vue'
  
  export default {
    components: {
      Filters,
      SeasonBanner,
      LatestUpdates,
      FeaturedTags,
      PopularGenres,
      PopularCollections
    }
  }
  </script>
  
  <style scoped>
  main {
    max-width: 1200px;
    margin: 1rem auto;
    padding: 0 var(--spacing);
  }
  </style>