<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </div>

  <router-link :to="{ name: 'RegisterPage'}" class="button3">
                        Register
                      </router-link>
</template>

<script>
import userService from '../services/UserService';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      userService.login({
        email: this.email,
        password: this.password
      })
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('role', response.data.role);
            this.$router.push('/Home');
        })
        .catch(error => {
            console.error('Login failed:', error);
            alert('Login failed:'+ error.response.data);
            this.$router.push('/');
        });
    }
  }
};
</script>