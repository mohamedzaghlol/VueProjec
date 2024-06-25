import {createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/HomePage.vue'
import CreatePerson from './components/CreatePerson.vue'
import UpdatePerson from './components/UpdatePerson.vue'
import PersonDetails from './components/PersonDetails.vue'
import Login from './components/LoginPage.vue'
import register from './components/RegisterPage.vue'
import { requireAuth } from './AuthGuard';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path : "/" ,    redirect: '/login'},
        {path : "/login" , name:"LoginPage" , component: Login},
        { path: "/Home", name: "HomePage", component: HomePage },   
        { path: "/Create", name: "CreatePerson", component: CreatePerson },
        { path: "/UpdatePerson/:id", name: "UpdatePerson", component: UpdatePerson  ,  beforeEnter: requireAuth    },
        { path: "/PersonDetails/:id", name: "PersonDetails", component: PersonDetails , beforeEnter: requireAuth    },
        {path : "/register" , name:"RegisterPage" , component: register},

    ]
});

// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
//     if ( token == null ) {
//         console.log("ssss")
//       next('/login'); // Redirect to the login page if not authenticated
//     } else {
//       next(); // Proceed to the requested route
//     }
//   });
const app = createApp(App)

app.use(router);
app.mount('#app')
