// UserService.js
import axios from 'axios';

const API_URL = 'https://localhost:7148/api/auth'; // Replace with your .NET API URL


class AuthService {
    register(user) {
      return axios.post(`${API_URL}/register`, user);
    }
  
    login(credentials) {
      return axios.post(`${API_URL}/login`, credentials);
    }
  
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }
  
    getToken() {
      return localStorage.getItem('token');
    } 
    getRole() {
      return localStorage.getItem('role');
    }
  }
  
  export default new AuthService();