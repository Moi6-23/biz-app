<script>
import router from '@/router'
import { mapState } from 'vuex'

export default {
    name: 'MovieScreen',
    computed: mapState({
        movieLocal: state => state.screenMovie
    }),
    methods:{
        handleReturn(){
            router.go(-1)
        }
    }
}
</script>

<template>
    <div class='container animate__animated animate__backInUp'>
      <h1 class="mt-4">{{movieLocal.title}}</h1>
      <hr/>
      <div class='col'>
        <div class='card'>
          <div class='row'>
            <div class='col-auto col-md-6'>
              <div class='card'>
                <img
                  class='card-img-top'
                  :src=movieLocal.imgPath
                />
              </div>
            </div>
            <div class='col-md-6'>
              <div class='card-body'>
                <h5 class='card-title'>{{movieLocal.title}}</h5>
                <h5 class='card-title'>{{movieLocal.release_date}}</h5>
                <p class='card-text'>{{movieLocal.overview}}</p>
                <button class='btn btn-bg btn-info' @Click="handleReturn">
                  Return
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>