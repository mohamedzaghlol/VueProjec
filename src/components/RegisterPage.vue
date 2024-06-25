<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>


   <router-link :to="{ name: 'LoginPage'}" class="button3">
                        Login
                      </router-link>
</template>

<script>
import userService from '@/services/UserService.js';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    registerUser() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      userService.register(user)
        .then(response => {
          console.log('User registered successfully:', response.data);
        localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
          // Redirect to login or perform other actions
                  this.$router.push('/Home'); 
        })
        .catch(error => {
          alert('Error registering user:'+ error.response.data);
          // Handle error, show appropriate message, etc.
        });
    },
  },
};
</script>