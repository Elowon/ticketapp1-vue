import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/LandingPage.vue';
import Login from '../pages/LoginPage.vue';
import Signup from '../pages/SignupPage.vue';
import Dashboard from '../pages/DashboardPage.vue';
import TicketManagement from '../pages/TicketManagement.vue';

// Route definitions
const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/auth/login', name: 'Login', component: Login },
  { path: '/auth/signup', name: 'Signup', component: Signup },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', name: 'Tickets', component: TicketManagement, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' } // fallback to landing
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('ticketapp_session');

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/auth/login');
  } else if ((to.path === '/auth/login' || to.path === '/auth/signup') && isLoggedIn) {
    next('/dashboard'); // redirect logged-in users away from auth pages
  } else {
    next();
  }
});

export default router;
