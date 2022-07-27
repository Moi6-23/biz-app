import { createStore } from 'vuex'

export default createStore({
  state: {
    moviesApi: localStorage.getItem('moviesData') ? JSON.parse(localStorage.getItem('moviesData')) : [],
    number: 1,
    category:'',
    favorites:localStorage.getItem('favoriteData') ? JSON.parse(localStorage.getItem('favoriteData')) : [],
    filter:[],
    APIKEY: '0de3e1041b6c5789c18348b17e2e7c7f',
    BASEURL:'https://api.themoviedb.org/3/',
    screenMovie:localStorage.getItem('screenData') ? JSON.parse(localStorage.getItem('screenData')) : [],
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
    moviesApi(state, data){
      const newDataCompleted = data.map(el => (
        {...el, ['imgPath']:`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
      ))
      localStorage.setItem('moviesData',JSON.stringify(newDataCompleted));
      state.moviesApi = [...state.moviesApi.filter(el => el.local), ...newDataCompleted]
    },
    addFavorites(state, payload){
      const movieFilter = state.favorites.find(el => el.id === payload.id);
      if(!movieFilter){
        state.favorites.push(payload);
        localStorage.setItem('favoriteData',JSON.stringify(state.favorites));
      }
    },
    deleteFavorites(state,payload){
      state.favorites = state.favorites.filter(el => el.id !== payload.id);
      localStorage.setItem('favoriteData',JSON.stringify(state.favorites));
    },
    deleteMovie(state,payload){
      state.moviesApi = state.moviesApi.filter(el => el.id !== payload);
      localStorage.setItem('moviesData',JSON.stringify(state.moviesApi));
    },
    screenMovie(state,movie){
      state.screenMovie = movie;
      localStorage.setItem('screenData',JSON.stringify(state.screenMovie));
    },    
  },
  actions: {
    getDataApiMovie({commit}){
      const URL = `${this.state.BASEURL}search/movie?api_key=${this.state.APIKEY}&page=${this.state.number}&query=${this.state.category}`;
      //console.log(URL)
      axios(URL)
        .then(response => {
        console.log(response.data.results)
        commit("moviesApi", response.data?.results);
        })
        .catch(error => {
          console.log(error)
        })
    }    
  },
  modules: {
  }
})
