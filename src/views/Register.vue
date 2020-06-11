<template>  
  <div>
    <v-row>
      <h1>New to travel app? Register here!</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-form v-model="valid" color="secondary" class="login-form">
          <v-text-field  v-model="username" label="Username" :rules="usernameRules" color="secondary"></v-text-field>
          <v-text-field  v-model="password" label="Password" :rules="passwordRules" color="secondary"></v-text-field>
          <v-text-field  v-model="email" label="Email" :rules="emailRules" color="secondary"></v-text-field>
          
           <v-row>
            <v-col cols="4">
              <v-menu v-model="menu2" offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-text-field :value="date" label="Date of birth" v-on="on" readonly></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          

          <v-row align="end" justify="space-between" class="mt-6">
             <v-col cols="auto">
               <router-link :to="{name: 'login'}"><p class="secondary--text caption mb-0">I already have an account.</p></router-link>
            </v-col>
            <v-col cols="auto">
               <v-btn color="secondary" class="mr-4" :disabled="!valid">Register</v-btn>
            </v-col>
          </v-row>  
        </v-form>
      </v-col>
    </v-row>
    
    
   


  </div>
</template>

<script>
  export default{
    data(){
      return {
        username: "",
        password: null,
        email: "",
        valid: true,
        date: null,
        menu2: false,
        usernameRules: [
          v => (v==="") ? 'Username is required' : (v.length <= 20) ? true : 'Username can not be longer than 20 characters'
        ],
        passwordRules: [
          v => (v===null) ? 'Password is required' : (v.length >= 6) ? true : 'Password must be at least 6 characters long',
          v => (v===null) ? 'Password is required' : (v.length <= 20) ? true : 'Password can not be longer than 20 characters'
        ],
        emailRules:[
          v => (v==="") ? 'Email is required' : v.includes("@") ? true : "Entered email not valid"
        ]
      }
    }
  }

</script>

<style>

</style>