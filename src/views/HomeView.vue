<script>
  import SearchApi from '../components/SearchApi/SearchApi.vue';
  export default {
    name: 'HomeView',
     components: { SearchApi},
  }
</script>

<template>
 <section class="container">
    <SearchApi/>
    <hr/>
 </section>
</template>

