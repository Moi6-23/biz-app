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
