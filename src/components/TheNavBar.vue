<template>
  <v-app-bar flat app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col xl="9">
          <v-row align="center">
            <v-col class="d-none d-sm-flex" >
               <router-link :to="{ name: 'home'}">
                 <v-toolbar-title class="grey--text title">
                  <span class="text-uppercase font-weight-light">The Vue School </span>
                  <span class="text-uppercase font-weight-bold">Travel App</span>
                 </v-toolbar-title>
                </router-link>
            </v-col>
            <v-col class="d-sm-none">
              <v-toolbar-title class="grey--text title subtitle-2">
                <span class="text-uppercase font-weight-light">The Vue School </span>
                <span class="text-uppercase font-weight-bold">Travel App</span>
              </v-toolbar-title>
            </v-col>
            <v-col cols='auto' class="d-md-none">
               <v-menu bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="grey" text dark v-on="on"><v-icon>mdi-menu</v-icon></v-btn>
                </template>
                <v-list flat>
                  <v-list-item class="text-uppercase grey--text font-weight-light">Destinations</v-list-item>
                  <v-list-item color="secondary"
                    :to="{ name: 'destination', params: { id: destination.slug }}"
                    v-for="destination in destinations" :key="destination.name" >
                    <v-list-item-title>{{destination.name}}</v-list-item-title>
                  </v-list-item>
                  <v-list-item :to="{name:'user'}" class="text-uppercase grey--text font-weight-light">My profile</v-list-item>
                </v-list>
              </v-menu>
              
            </v-col>
            
            
            
            <v-col cols="auto" class="d-none d-md-block">
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="grey" text dark v-on="on"><v-toolbar-title class="font-weight-light">Destinations</v-toolbar-title></v-btn>
                </template>
                <v-list flat>
                  <v-list-item color="secondary"
                    :to="{ name: 'destination', params: { id: destination.slug }}"
                    v-for="destination in destinations" :key="destination.name" >
                    <v-list-item-title>{{destination.name}}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>

            <v-col cols="auto" class="d-none d-md-block">
              <router-link :to="{name:'user'}"><v-toolbar-title class="text-uppercase grey--text font-weight-light">My profile</v-toolbar-title></router-link>               </v-col>
          </v-row>
        </v-col>
      </v-row>    
    </v-container>
  </v-app-bar>
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