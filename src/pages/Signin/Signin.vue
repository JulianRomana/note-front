<template>
  <form
    class="max-w-2xl w-full"
    @submit.prevent="login"
  >
    <h1 class="text-white text-3xl">
      Login to your account
    </h1>
    <p class="mt-4 mb-16">Connect to find the notes that you already saved!</p>
    <div class="flex flex-col gap-8">
      <input
        class="input"
        type="text"
        placeholder="email"
      >
      <input
        class="input"
        type="text"
        placeholder="password"
      >
      <button class="button">
        Login
      </button>
    </div>
  </form>
</template>

<script setup>

</script>