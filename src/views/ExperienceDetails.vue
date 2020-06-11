<template>
  <div>
    <v-row>
      <v-col>
        <h2 class="display-1 text-center pb-12 grey--text">{{experience.name}}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" lg="6">
        <v-img :src="require('@/assets/' + experience.image)"></v-img>
      </v-col>
      <v-col sm="12" lg="6">
        <p class="grey--text pl-lg-8 pr-sm-0 text-justify">{{experience.description}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="pt-10 pb-0 mb-0 grey--text font-weight-light title">See other experiences:</p>
      </v-col>
    </v-row>
     <v-row>
          <v-col v-for="experience in otherThreeExperiences" :key="experience.name" lg="4" md="6">
             <router-link :to="{ name: 'experienceDetails', params: { experienceId: experience.slug }}">
               <v-img :src="require('@/assets/' + experience.image)">
                 <v-row class="fill-height" align="center" justify="center">
                   <v-col align="center" justify="center">
                     <div class="display-1 font-weight-bold white--text">{{experience.name}}</div>
                     <v-chip class="ma-2" color="secondary" text-color="white" outlined>Read more >></v-chip>
                    </v-col>
                  </v-row> 
                </v-img>
              </router-link>
            
          </v-col>
        </v-row>
    <!-- <div class="experience">
      <img :src="require('@/assets/' + experience.image)">
      <p></p>
    </div> -->
    
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
      },
      otherThreeExperiences: function(){
       const otherThreeExperiences = this.destination.experiences.filter(experience => experience != this.experience)
       return otherThreeExperiences;
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