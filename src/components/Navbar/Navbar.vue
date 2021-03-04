<template>
  <div class="w-full fixed top-0 max-h-20 px-16 py-6 text-right">
    <template v-if="isSignedIn">
      <router-link
        to="/"
        class="mr-4"
      >
        create note
      </router-link>
      <router-link
        to="/notes"
        class="mr-4"
      >
        your notes
      </router-link>
      <span
        class="text-red-700 cursor-pointer"
        @click="logout"
      >
        logout
      </span>
    </template>
    <template v-else>
      <router-link
        class="mr-4"
        to="/signin"
      >
        signin
      </router-link>
      <router-link to="/signup">
        signup
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isSignedIn, setUserAuthorization } from '@/store/user-store'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  setUserAuthorization(false)
  router.push({ name: 'signin' })
}
</script>