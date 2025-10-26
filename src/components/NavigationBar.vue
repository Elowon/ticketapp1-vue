<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">TicketApp</router-link>

      <ul class="nav-links" v-if="!mobileMenuOpen">
        <li>
          <a href="#" @click.prevent="handleProtectedRoute('auth/login')">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="handleProtectedRoute('auth/login')">
            Tickets
          </a>
        </li>
        <li >
          <router-link to="/auth/signup" class="signup-btn">Get Started</router-link>
        </li>
      </ul>

      <button class="hamburger" @click="toggleMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <ul class="mobile-menu" v-if="mobileMenuOpen">
      <li>
        <a href="#" @click.prevent="handleProtectedRoute('/dashboard', true)">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="handleProtectedRoute('/tickets', true)">
          Tickets
        </a>
      </li>
      <li v-if="!isLoggedIn">
        <router-link @click="toggleMenu" to="/auth/signup">Get Started</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const isLoggedIn = computed(() => !!localStorage.getItem('ticketapp_session'))

// Handles protected routes (Dashboard, Tickets)
const handleProtectedRoute = (path, closeMenu = false) => {
  if (closeMenu) toggleMenu()
  if (isLoggedIn.value) {
    router.push(path)
  } else {
    alert('Please login.')
  }
}
</script>

<style scoped src="../styles/Navigationbar.css"></style>
