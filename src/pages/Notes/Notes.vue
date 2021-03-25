<template>
  <h1 class="text-4xl"> Your notes </h1>
  <div
    v-if="!notesComputed.length"
    class="text-3xl mt-8"
  >
    Add a new note!
  </div>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center"
  >
    <NoteListItem
      v-for="note in notesComputed"
      :key="note.id"
      :note="note"
      @delete="removeNote(note.id)"
      @update="putNote({ id: note.id, data: $event })"
    />
  </div>
</template>

<script setup>
import { useNote } from '@/store/notes-store'
import NoteListItem from './components/NotesListItem.vue'

const { fetchNotes, notesComputed, removeNote, putNote } = useNote()

fetchNotes()
</script>
