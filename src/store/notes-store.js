import { ref, computed, } from 'vue'
import { getNote, deleteNote, putNote, postNote } from '@/lib/note'

const privateNotes = ref([])

const useNote = (notes = privateNotes) => {
  const filterNotes = (id) => notes.value.filter(note => note.id !== id)

  return {
    notesComputed: computed(() => notes.value),
    addNote: (data) => postNote(data),
    updateNote: ({ id, data }) => putNote({ id, data }),
    removeNote: async (id) => {
      const { data } = await deleteNote(id)
      notes.value = filterNotes(data.id)
    },
    fetchNotes: async () => {
      const { data } = await getNote()
      notes.value = data
    },
  }
}

export { useNote }