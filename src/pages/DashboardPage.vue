<template>
  <main class="dashboard-container">
    <header class="dashboard-header">
      <h1>Dashboard</h1>
      <button class="logout-btn" @click="logout">Logout</button>
    </header>

    <section class="stats-cards">
      <div class="card total">
        <h2>Total Tickets</h2>
        <p>{{ totalTickets }}</p>
      </div>
      <div class="card open">
        <h2>Open Tickets</h2>
        <p>{{ openTickets }}</p>
      </div>
      <div class="card in-progress">
        <h2>In Progress</h2>
        <p>{{ inProgressTickets }}</p>
      </div>
      <div class="card closed">
        <h2>Resolved Tickets</h2>
        <p>{{ closedTickets }}</p>
      </div>
    </section>

    <section class="dashboard-actions">
      <button @click="$router.push('/tickets')">Go to Ticket Management</button>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const tickets = ref(JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]'))

const totalTickets = computed(() => tickets.value.length)
const openTickets = computed(() => tickets.value.filter((t) => t.status === 'open').length)
const inProgressTickets = computed(() => tickets.value.filter((t) => t.status === 'in_progress').length)
const closedTickets = computed(() => tickets.value.filter((t) => t.status === 'closed').length)

const router = useRouter()
const toast = useToast()

const logout = () => {
  localStorage.removeItem('ticketapp_session')
  toast.error('Logged out.')
  router.push('/')
}

let inactivityTimer = null
const inactivityLimit = 60 * 1000

const resetInactivityTimer = () => {
  if (inactivityTimer) clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    logout()
  }, inactivityLimit)
}

const activityEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart']

onMounted(() => {
  activityEvents.forEach((event) => window.addEventListener(event, resetInactivityTimer))
  resetInactivityTimer()
})

onBeforeUnmount(() => {
  activityEvents.forEach((event) => window.removeEventListener(event, resetInactivityTimer))
  if (inactivityTimer) clearTimeout(inactivityTimer)
})
</script>

<style scoped src="../styles/DashboardPage.css"></style>
