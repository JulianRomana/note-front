<template>
  <div class="container min-h-screen h-full max-w-full py-20 px-16 flex flex-col items-center">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import { Navbar } from './components/Navbar'
</script>