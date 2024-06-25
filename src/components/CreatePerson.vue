<template>
    <div>
        <h2>Create Person</h2>
        <form @submit.prevent="createPerson">
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
            <button type="submit"> Create</button> 
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
    methods: {
        createPerson() {
            axios.post('https://localhost:7148/api/Person', this.person)
                .then(() => {
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
<style>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
button {
    margin:20px;
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>