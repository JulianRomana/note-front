<template>
  <form
    class="max-w-2xl w-full"
    @submit.prevent="submitForm"
  >
    <h1 class="text-white text-4xl">
      Login to your account
    </h1>
    <p class="mt-4 mb-16">Connect to find the notes that you already saved!</p>
    <div class="flex flex-col gap-8">
      <input
        v-model="email"
        autocomplete="email"
        class="input"
        type="text"
        placeholder="email"
        required
      >
      <input
        v-model="password"
        autocomplete="current-password"
        class="input"
        type="password"
        placeholder="password"
        required
      >
      <button class="button">
        Login
      </button>
      <div
        v-if="error.hasError"
        class="text-red-700 "
      >
        {{ error.message }}
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/lib/user'
import { setUserAuthorization } from '@/store/user-store'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = reactive({
  hasError: false,
  message: 'User doesn\'t exists'
})

const submitForm = async () => {
  try {
    const token = await login({ email: email.value, password: password.value })
    localStorage.setItem('token', token)
    setUserAuthorization(true)
    router.push({ name: 'home' })
  } catch({ message }) {
    error.hasError = true
    error.message = message
  }
}

</script>