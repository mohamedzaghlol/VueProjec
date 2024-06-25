<template>
    <div>
      <h2>Person Details</h2>
      <div v-if="person">
        <p><strong>Name:</strong> {{ person.personName }}</p>
        <p><strong>Email:</strong> {{ person.email }}</p>
        <p><strong>Phone:</strong> {{ person.phone }}</p>
        <p><strong>Grad:</strong> {{ person.grad }}</p>
      </div>
    </div>
    
         <router-link :to="{ name: 'HomePage'}" class="button3">
                        Back To Home
                      </router-link>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
  
    data() {
      return {
        person: null
      };
    },
    mounted() {
      const userId = this.$route.params.id;
      axios.get(`https://localhost:7148/api/Person/${userId}`)
        .then(response => {
          this.person = response.data;
          console.log(response);
        })
        .catch(error => {
          // Handle error
          alert(error)
        });
    }
  };
  </script>