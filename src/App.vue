<template>
  <v-app>
    <TheNavBar/>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" xl="9">
              <transition name="fade" mode="out-in">
                <router-view :key="$route.path"></router-view>
              </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- <TheNavBar/>
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"></router-view>
      </transition>
    </v-content> -->
</v-app>
  
</template>

<script>
  import TheNavBar from './components/TheNavBar'
  
  export default{
    components:{
      TheNavBar
    }
  }
</script>

<style>
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0 300px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  p{
    text-align: justify;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  } */
</style>
