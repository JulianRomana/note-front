<template>
  <h1 class="text-4xl">Welcome to notes</h1>
  <h3 class="mt-4">Enter something that you might forget!</h3>
  <NoteForm
    v-model:title="title"
    v-model:content="content"
    @create-note="submitNote"
  />
</template>

<script setup>
import { ref } from 'vue'
import { NoteForm } from '@/components/NoteForm'
import { useNote } from '@/store/notes-store'

const { postNote } = useNote()

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
