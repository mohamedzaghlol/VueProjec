import AuthService from './services/UserService';

export function requireAuth(to, from, next) {
  const role = AuthService.getRole();
  if (role == "admin") {
    // User is authenticated
    next();
  } else {
    // User is not authenticated, redirect to login page
    alert("You are not accessible to this page ");
    next('/Home');
  }
}