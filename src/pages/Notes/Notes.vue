<template>
  <h1 class="text-4xl">
    Your notes
  </h1>
  <div 
    v-if="notesComputed.length" 
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
  >
    <div 
      v-for="note in notesComputed" 
      :key="note.id" 
      class="flex flex-col bg-white p-4 h-96 rounded-md"
    >
      <h3 class="text-gray-700 text-lg font-bold">{{ note.title }}</h3>
      <p class="text-gray-700 mt-4">{{ note.content }}</p>
      <div class="grid grid-flow-col gap-4 mt-auto">
        <button class="bg-gray-700 px-4 py-2 text-white mt-6 rounded-sm text-lg">Edit</button>
        <button class="bg-red-700 px-4 py-2 text-white mt-6 rounded-sm text-lg">Remove</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { notesComputed, fetchNotes } from '../../store/notes-store'

fetchNotes()
</script>
