import { ref, computed, } from 'vue'
import { getNote, deleteNote, putNote, postNote } from '@/lib/note'

export default (() => {
  const notes = ref([])
  const filterNotes = (id) => notes.value.filter(note => note.id !== id)

  return {
    notesComputed: computed(() => notes.value),
    addNote: (data) => postNote(data),
    updateNote: (id, data) => putNote(id, data),
    removeNote: async (id) => {
      await deleteNote(id)
      notes.value = filterNotes(id)
    },
    fetchNotes: async () => {
      const { data } = await getNote()
      notes.value = data
    },
  }
})()