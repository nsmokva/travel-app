<template>
  <div class>
    <div class="navbar">
      <p>The Vue School Travel App</p>
      <ul>
        <li v-for="destination in destinations" :key="destination.name">
          <router-link :to="{ name: 'destination', params: { id: destination.slug }}">{{destination.name}}</router-link>
        </li>
        <li>
          <router-link :to="{name:'user'}">My profile</router-link>
        </li>
      </ul>
    </div>
    
    <hr>
  </div>
</template>

<script>
  import store from "../store.js"
  export default{
    data: function(){
      return{
        destinations: store.destinations
      }
    }
  }

</script>

<style>
  
  p{
    font-weight: bold;
    font-size: 20px;
    padding-right: 30px;
  }
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  }
  li{
    display: inline-flex;
    align-items: center;
  }
  a{
    text-decoration: none;
    padding: 0 10px;
    display: inline;
    align-items: center;
  }
  .navbar{
    display: flex;
  }
  
</style>