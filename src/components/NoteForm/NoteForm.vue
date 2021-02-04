<template>
  <form
    class="flex flex-col gap-8 mt-16 max-w-2xl w-full"
    @submit.prevent="emit('create-note')"
  >
    <input
      v-model="title"
      class="input"
      type="text"
      name="title"
      placeholder="Groceries to buy"
      @input="$emit('update:title', $event.target.value)"
    >
    <textarea
      v-model="content"
      class="textarea h-24"
      name="content"
      rows="20"
      cols="50"
      placeholder="Toothpaste, Tomatoes, Saucisson"
      @keydown.enter="emit('create-note')"
      @input="$emit('update:content', $event.target.value)"
    />
    <button
      type="submit"
      class="button"
    >
      Send note
    </button>
  </form>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const props = defineProps({ title: String, content: String })
const emit = defineEmit(['create-note', 'update:title', 'update:content'])
</script>