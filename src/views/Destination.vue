<template>
  <div>
    <GoBack/>
    <h2>{{destination.name}}</h2>
    <div class="destination">
      <img :src="require('@/assets/' + destination.image)">
      <p>{{destination.description}}</p>
    </div>
    <h3 id="experience">Top experiences in {{destination.name}}</h3>
    <div class="allexperiences" >
      <div v-for="experience in destination.experiences" :key="experience.name" class="experience">
        <router-link :to="{ name: 'experienceDetails', params: { experienceId: experience.slug }, hash: '#experience'}">
          <img :src="require('@/assets/' + experience.image)">
          <div>{{experience.name}}</div>
        </router-link>
      </div>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
  import store from "@/store.js"
  import GoBack from "../components/GoBack"
  export default{
    data: function(){
      return{
        destinations: store.destinations
      }
    },
    computed: {
      destination: function(){
        for(var i=0; i<this.destinations.length; i++){
          if(this.destinations[i].slug == this.id){
            var destination=this.destinations[i];
          }
        }
         return destination;
      
      }
    },
    props: ['id'],
    components:{
      GoBack
    }
  }
</script>

<style scoped>
  h2{
    font-size: 40px;
    margin: 30px 0 0 0;
  }
  img{
    width: 400px;
    /* height: auto; */
    padding-right: 20px;
  }
  p{
    color: #404040;
    font-weight: normal;
  }
  h3{
    font-size: 30px;
  }
  .destination{
    display: flex;
  }
  .experience{
    position: relative;
    text-align: center;
    padding: 10px;
  }
  .experience:first-child{
    padding-left: 0px;
  }
  .experience:last-child{
    padding-right: 0px;
  }
  .experience a{
    padding: 0px;
  }
  .experience img{
    width: 100%;
  }
  .experience div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
  }
  .allexperiences{
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
  }
</style>
