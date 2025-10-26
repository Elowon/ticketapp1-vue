<template>
  <NavigationBar />
  <main class="auth-container">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignup" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          v-model="email"
          placeholder="Enter email"
          required
          aria-required="true"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Enter password"
          required
          aria-required="true"
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm password"
          required
          aria-required="true"
        />
      </div>

      <button type="submit">Sign Up</button>
    </form>
    <p>
      Already have an account?
      <a @click.prevent="$router.push('/auth/login')" href="#">Login</a>
    </p>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const toast = useToast()
const router = useRouter()

const handleSignup = () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    toast.error('Please fill all required fields.')
    return
  }

  if (password.value !== confirmPassword.value) {
    toast.error('Passwords do not match.')
    return
  }

  if (password.value.length < 8) {
    toast.error('Password must be at least 8 characters long.')
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    toast.error('Please enter a valid email address.')
    return
  }

  const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')
  const existingUser = users.find((u) => u.email === email.value)
  if (existingUser) {
    toast.error('User already exists.')
    return
  }

  users.push({ email: email.value, password: password.value })
  localStorage.setItem('ticketapp_users', JSON.stringify(users))

  toast.success('Signup successful! Redirecting to login...')
  router.push('/auth/login')
}
</script>

<style scoped src="../styles/Auth.css"></style>
