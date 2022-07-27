<script>
import { mapState } from 'vuex'
import MovieCard from '../components/Movie/MovieCard.vue';

export default {
  name: 'FavoritesView',
  computed: mapState({
    movieFavorites: state => state.favorites
  }),
  components:{
    MovieCard
  },
  methods:{
    deleteFavorites(movie){
      this.$store.commit('deleteFavorites', movie)
    },
    screenMovie(movie){
      this.$store.commit('screenMovie', movie)
    },
  }
}
</script>

<template>
  <section class="container">
    <div class="row row-cols-1 row-cols-sm-3 g-3 mt-2">
      <div
        class="col animate__animated animate__backInLeft"
        v-for="movie in movieFavorites"
        :key="movie.id"
      >
        <MovieCard
          :movie="movie"
        />
      </div>
    </div>
  </section>
</template>

<style>
</style>