<template>
  <NavigationBar />
  <main class="auth-container">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="handleLogin" novalidate>
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

      <button type="submit">Login</button>
    </form>

    <p>
      Don't have an account?
      <a @click.prevent="$router.push('/auth/signup')" href="#">Sign up</a>
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

const toast = useToast()
const router = useRouter()

const handleLogin = () => {
  if (!email.value || !password.value) {
    toast.error('Please fill all required fields.')
    return
  }

  const users = JSON.parse(localStorage.getItem('ticketapp_users') || '[]')

  const user = users.find((u) => u.email === email.value && u.password === password.value)

  if (!user) {
    toast.error('Invalid email or password.')
    return
  }

  localStorage.setItem('ticketapp_session', Math.random().toString(36).substring(2))

  toast.success('Login successful!')
  router.push('/dashboard')
}
</script>

<style scoped src="../styles/Auth.css"></style>
