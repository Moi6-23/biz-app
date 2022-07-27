<script >
import { mapState } from 'vuex'

export default {
  name: "HomeList",
  computed: mapState({
    movies: state => {
      return state.moviesApi.map(movie => {
        const located = state.favorites.find(el => el.id === movie.id)
        if(located){movie.favorite = true }else{movie.favorite = false}
        return movie
      })
    },
  }),
  methods:{
    addFavorites(movie){
      this.$store.commit('addFavorites', movie)
    },
    deleteFavorites(movie){
      this.$store.commit('deleteFavorites', movie)
    },
    deleteMovie(id){
      this.$store.commit('deleteMovie', id)
    },
    screenMovie(movie){
      this.$store.commit('screenMovie', movie)
    },
  }
};
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-3 g-3">
    <div
      class="col animate__animated animate__backInLeft"
      v-for="movie in movies"
      :key="movie.id"
    >
      <div class="card" :class="{ favorite: movie.favorite}">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img class="card-img" :src=movie.imgPath />
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{{ movie.title }}</h5>
              <p class="card-text">{{ movie.release_date }}</p>
              <p class="card-text" v-if="movie.local">Local</p>
              <router-link to='/home/screen' @click="screenMovie(movie)">More...</router-link>
              <div class="mt-3">
                <button @click="deleteMovie(movie.id)" class="btn btn-primary me-2" >Delete</button>
                <button @click="addFavorites(movie)" v-if="!movie.favorite" class="btn btn-outline-primary me-2">Favorites</button>
                <button @click="deleteFavorites(movie)" v-else class="btn btn-outline-danger">Delete Favorite</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .favorite{
    border: 3px solid #dc3545;
    border-radius: 5px;
  }
</style>