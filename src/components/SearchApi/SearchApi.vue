<script>
    import swal from 'sweetalert';
    export default{
        name: 'SearchApi',
        computed:{
            InputCategory:{
                set(movieInput){
                    this.$store.commit('addMovieCategory', movieInput);
                }
            },
            InputNumber:{
                set(num){
                    this.$store.commit('addNumberMovies', num);
                }
            },
        },
        methods:{
          callApiData(){
            if(this.$store.getters.validationApi){
              swal("Missing information", "Please complete all fields", "info");
            }else{
              this.$store.dispatch('getDataApiMovie')
            }
          }
        }
    }
</script>

<template>
  <div class="row d-flex justify-content-center">
    <div class="col-auto mt-5 text-center">
      <h4>Search Movie Category</h4>
      <form
        class="d-flex justify-content-center ms-3"
        @submit.prevent="onSubmit"
      >
        <div class="row mb-3">
          <div class="row input-group mb-1">
            <input
              type="text"
              class="form-control"
              placeholder="Movie category"
              aria-describedby="button-addon2"
              autoComplete="off"
              v-model="InputCategory"
            />
            <input
              type="number"
              class="form-control"
              placeholder="Page Number default 1"
              aria-describedby="button-addon2"
              autoComplete="off"
              v-model="InputNumber"
            />
          </div>
          <div class="row ms-0.6">
            <button class="btn btn-primary" type="submit" @click="callApiData">Search Movies</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
</style>