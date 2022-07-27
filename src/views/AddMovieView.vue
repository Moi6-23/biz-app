<template>
  <div class="container col-auto mt-3 col-sm-4">
    <div>
      <label class="m-2">Movie Title</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Movie Title"
          aria-label="Movie tile"
          aria-describedby="basic-addon1"
          v-model="titleInput"
        />
      </div>
      <label class="m-2">Movie Date</label>
      <div class="input-group mb-3">
        <input
          type="date"
          class="form-control"
          placeholder="Movie Date"
          aria-label="date"
          aria-describedby="basic-addon2"
          v-model="dateInput"
        />
      </div>
      <label class="m-2">Movie URL</label>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Movie url"
          aria-label="movie url"
          aria-describedby="basic-addon2"
          v-model="urlInput"
        />
      </div>
      <label class="m-2">Movie Description</label>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" v-model="descInput"></textarea>
        <label for="floatingTextarea2">Description</label>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-success mt-2" @click="senDdataNewMovie">Send Movie</button>
      </div>
    </div>
<!-- ----------------------------------------------------------------------- -->
    <hr/>
      <h1 class="mt-4">{{titleInput}}</h1>
      <hr/>
      <div class='col'>
        <div class='card'>
          <div class='row'>
            <div class='col-auto col-md-6'>
              <div class='card'>
                <img
                  class='card-img-top'
                  :src=urlInput
                />
              </div>
            </div>
            <div class='col-md-6'>
              <div class='card-body'>
                <h5 class='card-title'>{{titleInput}}</h5>
                <h5 class='card-title'>{{dateInput}}</h5>
                <p class='card-text'>{{descInput}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import { useStore } from 'vuex'
import swal from 'sweetalert';

export default {
  name: "AddMovieView",
  setup(){
    const store = useStore();
    const titleInput = ref('');
    const dateInput = ref('');
    const urlInput = ref('');
    const descInput = ref('');

    const senDdataNewMovie = () => {
      if(titleInput.value !== '' && !dateInput.value !== '' && !urlInput.value !== ''){
        let objData = {
          id: Date.now(),
          local:true,
          title: titleInput.value,
          release_date: dateInput.value,
          imgPath: urlInput.value,
          overview: descInput.value,
        }
        store.commit('addLocalMovie',objData);
       swal("Success", "Uploaded data completed", "success");
      }else{
        swal("Success", "Please complete all fields", "error");
      }
    }

    return {titleInput, dateInput, urlInput, descInput, senDdataNewMovie};
  }
};
</script>
