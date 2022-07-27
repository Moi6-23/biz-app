<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="card-img" :src="movie.imgPath" />
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.release_date }}</p>
          <router-link to="/home/screen" @click="screenMovie(movie)"
            >More...</router-link
          >
          <div class="mt-3">
            <button @click="deleteFavorites(movie)" class="btn btn-danger">
              Delete Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'MovieCard',
    props:{movie: Object},
    methods:{
    deleteFavorites(movie){
      this.$store.commit('deleteFavorites', movie)
    },
    screenMovie(movie){
      this.$store.commit('screenMovie', movie)
    },
  }

};
</script>

<style>
</style>