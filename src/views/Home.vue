<template>
  <div class="home">
    <h2>All Destinations</h2>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name" class="destination">
        <div>
          <router-link :to="{ name: 'destination', params: { id: destination.slug }}">{{destination.name}}</router-link>  
        </div>
        <router-link :to="{ name: 'destination', params: { id: destination.slug }}"><img :src="require('@/assets/' + destination.image)"></router-link>
      </div>
    </div> 
  </div>
</template>

<script>
  import store from '@/store.js'
  // @ is an alias to /src    

export default {
  name: 'Home',
  data: function(){
    return {
      destinations: store.destinations
    }
  },
}
</script>

<style scoped>
  img{
    height: 100px;
    width: auto;
    padding-top: 20px; 
  }
  h2{
    padding-bottom: 30px;
  }
  .destinations{
    display: flex;
    justify-content: center;
  }
  .destination{
    padding: 0 20px;
    color: #42b983;
    font-weight: bold;
  }
  
  
</style>
