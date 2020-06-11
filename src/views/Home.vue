<template>
  <div>
    <v-carousel continuous :show-arrows="false" cycle
    height="auto">
      <v-carousel-item
        v-for="destination in destinations" :key="destination.name"
        :src="require('@/assets/' + destination.image)"
        :to="{ name: 'destination', params: { id: destination.slug }}">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3 text-uppercase font-weight-bold white--text">{{destination.name}}</div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
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

<style>
  /* .v-image__image{
    opacity: 0.5;
  } */
  
  
</style>
