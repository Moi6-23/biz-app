<script>
import SearchApi from "../components/SearchApi/SearchApi.vue";
import MovieList from "../components/Movie/MovieList.vue";
export default {
  name: "HomeView",
  components: { SearchApi, MovieList },
};
</script>

<template>
  <section class="container">
    <SearchApi />
    <hr />
    <MovieList />
  </section>
</template>

