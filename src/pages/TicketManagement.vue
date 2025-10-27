<template>

  <main class="tickets-container">
    <NavigationBar />
      <h1>Ticket Management</h1>

    <section class="ticket-form">
      <h2>{{ editingTicket ? 'Edit Ticket' : 'Create Ticket' }}</h2>
      <form @submit.prevent="handleSubmit" novalidate>
        <div class="form-group">
          <label for="title">Title *</label>
          <input id="title" v-model="form.title" type="text" placeholder="Ticket title" required aria-required="true" />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" placeholder="Ticket description" v-model="form.description"></textarea>
        </div>

        <div class="form-group">
          <label for="status">Status *</label>
          <select id="status" v-model="form.status" required>
            <option value="">Select status</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button type="submit">{{ editingTicket ? 'Update' : 'Create' }}</button>
        <button type="button" v-if="editingTicket" @click="cancelEdit">Cancel</button>
      </form>
    </section>

    <section class="tickets-list">
      <h2>Existing Tickets</h2>
      <div v-if="tickets.length === 0">No tickets available.</div>
      <div class="ticket-card" v-for="ticket in tickets" :key="ticket.id">
        <h3>{{ ticket.title }}</h3>
        <p>{{ ticket.description }}</p>
        <span :class="['status-tag', ticket.status]">{{ ticket.status.replace('_', ' ') }}</span>
        <div class="card-actions">
          <button @click="editTicket(ticket)">Edit</button>
          <button @click="deleteTicket(ticket.id)">Delete</button>
        </div>
      </div>
    </section>

  </main>
  <FooterPage />
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useToast } from 'vue-toastification'
import NavigationBar from '@/components/NavigationBar.vue';
import FooterPage from '@/components/FooterPage.vue';


const toast = useToast()

const tickets = ref(JSON.parse(localStorage.getItem('ticketapp_tickets') || '[]'))

const form = reactive({
  id: null,
  title: '',
  description: '',
  status: '',
})

const editingTicket = ref(false)

const handleSubmit = () => {
  if (!form.title || !form.status) {
    toast.error('Title and Status are required.')
    return
  }

  if (!['open', 'in_progress', 'closed'].includes(form.status)) {
    toast.error('Invalid status value.')
    return
  }

  if (editingTicket.value) {
    const index = tickets.value.findIndex((t) => t.id === form.id)
    if (index !== -1) {
      tickets.value[index] = { ...form }
      toast.success('Ticket updated successfully!')
    }
  } else {
    const newTicket = { ...form, id: Date.now() }
    tickets.value.push(newTicket)
    toast.success('Ticket created successfully!')
  }

  localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets.value))
  resetForm()
}

const editTicket = (ticket) => {
  form.id = ticket.id
  form.title = ticket.title
  form.description = ticket.description
  form.status = ticket.status
  editingTicket.value = true
}

const cancelEdit = () => resetForm()

const resetForm = () => {
  form.id = null
  form.title = ''
  form.description = ''
  form.status = ''
  editingTicket.value = false
}

const deleteTicket = (id) => {
  if (confirm('Are you sure you want to delete this ticket?')) {
    tickets.value = tickets.value.filter((t) => t.id !== id)
    localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets.value))
    toast.success('Ticket deleted successfully!')
  }
}

</script>

<style scoped src="../styles/TicketManagement.css"></style>
