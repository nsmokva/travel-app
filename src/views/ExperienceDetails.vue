<template>
  <div>
    <h2>{{experience.name}}</h2>
    <div class="experience">
      <img :src="require('@/assets/' + experience.image)">
      <p>{{experience.description}}</p>
    </div>
    
  </div>

</template>

<script>
  import store from "@/store.js"
  export default{
    data: function(){
      return{
        destinations: store.destinations
      }
    },
    props: ['id', 'experienceId'],
    computed:{
      destination: function(){
        for(var i = 0; i<this.destinations.length; i++){
          if(this.destinations[i].slug == this.id){
            var destination = this.destinations[i]
          }
        }
        return destination
      },
      experience: function(){
        for (var i = 0; i<this.destination.experiences.length; i++){
          if(this.destination.experiences[i].slug==this.experienceId){
            var experience = this.destination.experiences[i]
          }
        }
        return experience
      }
    }
  }
</script>

<style>
  .experience{
    display: flex;
  }
  .experience p{
    padding-left: 20px;
    color: #404040;
    font-weight: normal;
    margin: 0;
  }
  h2{
    padding: 40px 0 20px;
    font-size: 25px;
  }
  img {
  display: inline-block;
  max-width:500px;
  max-height:500px;
  width: auto;
  height: auto;
}
</style>