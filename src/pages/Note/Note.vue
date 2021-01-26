<template>
  <h1 class="text-4xl">Welcome to notes</h1>
  <h3 class="mt-4">Enter something that you might forget!</h3>
  <form 
    class="flex flex-col gap-8 mt-16 max-w-2xl w-full" 
    @submit.prevent="submitNote"
  >
    <input 
      v-model="title" 
      class="h-12 p-3 rounded-sm text-gray-700 text-lg" 
      type="text" 
      name="title" 
      placeholder="Groceries to buy"
    >
    <textarea 
      v-model="content" 
      class="h-24 p-3 rounded-sm text-gray-700 text-lg resize-none" 
      name="content" 
      rows="20" 
      cols="50" 
      placeholder="Toothpaste, Tomatoes, Saucisson"
      @keydown.enter="submitNote"
    />
    <button
      type="submit" 
      class="bg-gray-700 px-4 py-4 text-white mt-6 rounded-sm text-xl"
    >
      Send note
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { postNote } from '../../lib/note'

const title = ref('')
const content = ref('')
const submitNote = () => {
  postNote({ title: title.value, content: content.value })
    .finally(() => {
      title.value = ''
      content.value = ''
    })
}
</script>