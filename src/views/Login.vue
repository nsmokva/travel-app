<template>
  <div>
    <v-row justify="center">
      <v-col cols="4">
        <v-form v-model="valid" color="secondary" class="login-form">
          <v-text-field  v-model="username" label="Username" :rules="usernameRules" color="secondary"></v-text-field>
          <v-text-field  v-model="password" label="Password" :rules="passwordRules" color="secondary"></v-text-field>
          <v-row align="end" justify="space-between" class="mt-6">
             <v-col cols="auto">
               <router-link :to="{name: 'register'}"><p class="secondary--text caption mb-0">I do not have account.</p></router-link>
            </v-col>
            <v-col cols="auto">
               <v-btn color="secondary" class="mr-4" @click="login" :disabled="!valid">Login</v-btn>
            </v-col>
          </v-row>
         
        </v-form>
      </v-col>
    </v-row>
    
    
    
    <!-- <h1>Login</h1>
    <div>
      <label for="username">Username</label>
      <input v-model="username" type="text" name = "username">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password">
      <button @click="login">Login</button>
    </div> --> 
  </div>
</template> 

<script>
  import store from "@/store.js"
  export default{
    data(){
      return{
        username: "",
        password: null,
        valid: true,
         usernameRules: [
          v => (v==="") ? 'Username is required' : (v.length <= 20) ? true : 'Username can not be longer than 20 characters'
        ],
        passwordRules: [
          v => (v===null) ? 'Password is required' : (v.length >= 6) ? true : 'Password must be at least 6 characters long',
          v => (v===null) ? 'Password is required' : (v.length <= 20) ? true : 'Password can not be longer than 20 characters'
        ],
      }
    },
    methods:{
      login(){
        //Authenticate user against API
        store.user = this.username;
        const redirectPath = this.$route.query.redirect
        this.$router.push(redirectPath)
      }
    }
  }
</script>

<style>
    .login-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }
</style>

