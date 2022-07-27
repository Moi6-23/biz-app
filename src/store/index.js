import { createStore } from 'vuex'

export default createStore({
  state: {
    moviesApi: localStorage.getItem('moviesData') ? JSON.parse(localStorage.getItem('moviesData')) : [],
    number: 1,
    category:'',
  },
  getters: {
  },
  mutations: {
    addMovieCategory(state, movieInput){
      state.category = movieInput;
    },
    addNumberMovies(state, num){
      state.number = num
    },
  },
  actions: {
  },
  modules: {
  }
})
