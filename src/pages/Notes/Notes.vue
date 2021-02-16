<template>
  <h1 class="text-4xl">
    Your notes
  </h1>
  <div
    v-if="notesComputed.length"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center"
  >
    <NoteListItem
      v-for="note in notesComputed"
      :key="note.id"
      :note="note"
      @delete="removeNote(note.id)"
      @update="updateNote(note.id, $event)"
    />
  </div>
  <div
    v-else
    class="text-3xl mt-8"
  >
    Add a new note!
  </div>
</template>

<script setup>
import { notesComputed, fetchNotes, removeNote, updateNote } from '@/store/notes-store'
import NoteListItem from './components/NotesListItem.vue'

fetchNotes()
</script>
