<template>
  <div>
    <h1>Welcome {{user}}</h1>
    <router-link :to="{name: 'invoices'}">Invoices</router-link>
    <button @click="logOut">Log Out</button>
  </div>
</template>

<script>
  import store from '@/store.js'
  export default{
    data: function(){
      return{
        user: store.user
      }
    },
    methods:{
      logOut(){
        store.user = null;
        this.$router.push({name: 'home'})
      }
    }
  }
</script>