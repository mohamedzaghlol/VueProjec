<template>
  <div>

    <button @click="logout()">Logout</button> 
    <h1>Welcome to My App</h1>
    
    <h3>List of users</h3>
    <!-- Add more content and components as needed -->
  </div>
              <table class="table ">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Grade</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.personName }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.grad }}</td>
                    <td>
                      <!-- <button @click="editPerson(user.id)">Edit</button> -->
                      <router-link :to="{ name: 'UpdatePerson', params: { id: user.id } }" class="button2" >
                        Edit
                      </router-link>
                      <router-link :to="{ name: 'PersonDetails', params: { id: user.id } }" class="button3">
                        User Details
                      </router-link>
                       <button @click="DeleteUser(user.id)" class="btn4">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
                <router-link :to="{ name: 'CreatePerson'}" class="button">
                    Create Person
                </router-link>



</template>

<script>
import axios from 'axios';
import userService from '../services/UserService';

export default {
 data() {
    return {
      users: [] // This will hold the data 
    };
  },
  mounted() {
        axios.get('https://localhost:7148/api/Person')
            .then(response => {
                this.users = response.data;
            })
            .catch(error => {
                // Handle error
                alert(error)
            });
        },
        methods :
        {
          async logout(){
           try {
                await userService.logout(); 
                this.$router.push('/');
           }
           catch (error) {
            console.error('Logout failed:', error);
            alert('Logout failed:', error);
            this.$router.push('/Home'); // Redirect to another page if logout fails
          }
          },
          DeleteUser(userid){
               const token = localStorage.getItem('token');
                const config = {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                };
              axios.delete(`https://localhost:7148/api/Person/${userid}`,config)
                      .then(() => {
                          this.$route.push('/Home');
                      })
                      .catch(error => {
                          // Handle error
                          alert("You are not accessible / Error message" + error )
                      });
                      
          }

        }
}
</script>

<style >
/* Optional: Add custom styles */
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}

.button {
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
.button2 {
    background-color: #008CBA;border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }
  .button3 {
    background-color:  #e7e7e7; 
    color: black;
    border: none;
    margin-left : 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }
 .btn4 {
    background-color:  #dc3545; 
    color: white;
    border: none;
    margin-left : 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  }

</style>