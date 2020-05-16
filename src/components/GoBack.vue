<template>
  <div class="container">
    <div @click="goBack">go back</div>
   </div> 
</template>

<script>
  export default{
    methods:{
      goBack: function(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .container{
    display: flex;
  }
  
</style>