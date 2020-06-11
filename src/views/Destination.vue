<template>
  <div>
    <GoBack/>
    <v-row>
      <v-col cols="12">
         <h2 class="display-3 text-center pb-12 text-uppercase grey--text">{{destination.name}}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" lg="6">
         <v-img :src="require('@/assets/' + destination.image)" contain position="top"></v-img>
      </v-col>
      <v-col sm="12" lg="6">
         <p class="grey--text pl-lg-8 pr-sm-0 text-justify">{{destination.description}}</p>
      </v-col>
    </v-row>
   
    <v-row>
      <v-col cols="12">
        <h3 class="display-1 text-center pb-12 text-uppercase grey--text">Top experiences in {{destination.name}}</h3>
      </v-col>
      <v-col>
        <v-row>
          <v-col v-for="experience in destination.experiences" :key="experience.name" lg="3" md="6">
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
        
        
        <!-- <div class="allexperiences">
          <div v-for="experience in destination.experiences" :key="experience.name" class="experience">
            <router-link :to="{ name: 'experienceDetails', params: { experienceId: experience.slug }, hash: '#experience'}">
              <img :src="require('@/assets/' + experience.image)">
              <div></div>
            </router-link>
          </div>
        </div> -->
      </v-col>
    </v-row>
    <!-- <v-row id="experience">
      <v-col>
        <router-view :key="$route.path"></router-view>
      </v-col>
    </v-row> -->
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
  /* h2{
    font-size: 40px;
    margin: 30px 0 0 0;
  }
  img{
    width: 400px;
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
  } */
</style>
