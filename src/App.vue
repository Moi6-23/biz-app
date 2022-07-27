<script setup>
    import { createApp } from 'vue';
    createApp({
      data(){
        return{
          isActive: true
        }
      }
    })
</script>


<template>
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="navbar-collapse">
      <div class="nav-nav">
        <router-link
          to="/"
          :class="{ isActive }"
          @click="isActive = !isActive"
          class="title-nav nav-link"
          >Home</router-link
        >
        <router-link
          to="/add"
          :class="{ isActive }"
          @click="isActive = !isActive"
          class="title-nav nav-link"
          >Add Movie</router-link
        >
        <router-link
          to="/filter"
          :class="{ isActive }"
          @click="isActive = !isActive"
          class="title-nav nav-link"
          >Filter Movie</router-link
        >
        <router-link
          to="/favorites"
          :class="{ isActive }"
          @click="isActive = !isActive"
          class="title-nav nav-link"
          >Favorites</router-link
        >
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
.navbar {
  height: 70px;
}
.nav-nav {
  width: 100%;
  display: flex;
  justify-content: center;
}
.title-nav {
  margin-left: 18px;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  color: white;
  text-decoration: none;
}
.title-nav:hover {
  font-size: 18px;
  transition: font-size 0.2s;
}
</style>