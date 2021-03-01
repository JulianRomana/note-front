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
      >
        your notes
      </router-link>
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
import { isSignedIn } from '@/store/user-store'

</script>