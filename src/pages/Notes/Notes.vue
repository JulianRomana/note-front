<template>
  <h1 class="text-4xl">
    Your notes
  </h1>
  <div 
    v-if="notesComputed.length"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center" 
  >
    <div
      v-for="note in notesComputed"
      :key="note.id"
      class="flex flex-col items-center bg-white p-4 h-96 rounded-md"
    >
      <NoteListItem 
        :note="note" 
        @delete="removeNote(note.id)"
        @update="updateNote(note.id, $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { notesComputed, fetchNotes, removeNote, updateNote } from '../../store/notes-store'
import NoteListItem from './components/NotesListItem.vue'

fetchNotes()
</script>
