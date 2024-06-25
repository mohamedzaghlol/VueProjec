<template>
  <div>
    <h2>Update Person</h2>
    <form @submit.prevent="updatePerson">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="person.personName" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="person.email" required>
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="person.phone" required>
      <label for="grad">Grad:</label>
      <select id="grad" v-model="person.grad" required>
        <option value="good">Good</option>
        <option value="very good">Very Good</option>
        <option value="excellent">Excellent</option>
      </select>
      <button type="submit">Update</button>
    </form>
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
      person: {
        personName: '',
        email: '',
        phone: '',
        grad: ''
      }
    };
  },
  mounted() {
     const userId = this.$route.params.id;
      axios.get(`https://localhost:7148/api/Person/${userId}`)
            .then(response => {
        this.person = response.data;
      })
      .catch(error => {
        // Handle error
        alert(error)

      });
  },
  methods: {
    
    updatePerson() {
           const userId = this.$route.params.id;
           const token = localStorage.getItem('token');
           const config = {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           };
      axios.put(`https://localhost:7148/api/Person/${userId}`, this.person,config)

        .then( () => {
          // Handle success
          //alert(response)
          this.$router.push('/Home'); 
        })
        .catch(error => {
          // Handle error
          alert(error)

        });
    }
  }
};
</script>
