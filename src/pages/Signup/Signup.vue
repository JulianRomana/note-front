<template>
  <div class="text-4xl text-white ">Signup</div>
  <p class="mt-4 mb-16">Create an account to use notes</p>
  <form
    class="flex flex-col gap-8 max-w-2xl w-full"
    @submit.prevent="submitForm"
  >
    <input
      v-model="email"
      class="input"
      type="email"
      placeholder="email"
    >
    <input
      v-model="username"
      class="input"
      type="text"
      placeholder="username"
    >
    <input
      v-model="password"
      class="input"
      type="password"
      placeholder="password"
      autocomplete="on"
    >
    <button
      type="submit"
      class="button"
    >
      Create an account
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { createAccount } from '@/lib/user'
import { setUserAuthorization } from '@/store/user-store'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const username = ref('')
const password = ref('')

const submitForm = async () => {
  const token = await createAccount({
    email: email.value,
    username: username.value,
    password: password.value
  })
  localStorage.setItem('token', token)
  setUserAuthorization(true)
  router.push({ name: 'home' })
}
</script>