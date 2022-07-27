<template>
  <div class="container col-auto mt-3">
    <div>
      <div class="row">
        <div class="col-12 col-sm-5 mb-4">
          <h4>Search Movie</h4>
          <hr />
          <form @submit.prevent="onSubmit">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Title movie"
                aria-describedby="button-addon2"
                autoComplete="off"
                v-model="searchInput"
              />
              <button
                class="btn btn-primary ps-4 pe-4"
                @click="dataFilterClick"
              >
                Filter
              </button>
            </div>
          </form>
        </div>
        <div class="col-12 col-sm-7">
          <h4>Results</h4>
          <hr />
          <div>
            <div
              class="card mb-3"
              v-for="dataFilter in dataFilters"
              :key="dataFilter.id"
            >
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img class="card-img" :src="dataFilter.imgPath" />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ dataFilter.title }}</h5>
                    <p class="card-title">{{ dataFilter.release_date }}</p>
                    <router-link
                      to="/home/screen"
                      @click="screenMovie(dataFilter)"
                      >More...</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "FilterMovie",
  setup() {
    const searchInput = ref("");
    const dataFilters = ref([]);
    const store = useStore();
    const filterMovie = JSON.parse(localStorage.getItem("moviesData"));
    const dataFilterClick = () => {
      let titleFilter = searchInput.value.toLowerCase();
      dataFilters.value = filterMovie.filter((el) =>
        el.title.toLowerCase().includes(titleFilter)
      );
    };
    const screenMovie = (movie) => {
      store.commit("screenMovie", movie);
    };
    return { searchInput, dataFilters, dataFilterClick, screenMovie };
  },
};
</script>

<style>
</style>