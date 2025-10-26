<template>
  <main class="landing-container">
    <NavigationBar />

    <section class="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">Welcome to TicketApp</h1>
      <p>Manage your tickets easily and efficiently!</p>

      <div class="action-buttons" aria-label="btn action">
        <button class="btn login" @click="$router.push('/auth/login')">Login</button>
        <button class="btn get-started" @click="$router.push('/auth/signup')">Get Started</button>
      </div>


      <div class="circle circle1" aria-hidden="true"></div>
      <div class="circle circle2" aria-hidden="true"></div>

      <svg
        class="wave"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path fill="#4f46e5" d="M0,0 C480,150 960,0 1440,150 L1440,0 L0,0 Z"></path>
      </svg>
    </section>


    <FooterPage />
  </main>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import FooterPage from '../components/FooterPage.vue'
</script>


<style scoped src="../styles/LandingPage.css"></style>

