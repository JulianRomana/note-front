import { ref, computed, } from 'vue'
import { getNote, deleteNote } from '../lib/note'

const notes = ref([])
const notesComputed = computed(() => notes.value)
const updateNotes = id => notes.value = notes.value.filter(note => note.id !== id)

const fetchNotes = async () => {
  try {
    const { data } = await getNote()
    notes.value = data
  } catch (err) {
    console.error(err)
  }
}

const removeNote = async id =>{
  try {
    await deleteNote(id)
    updateNotes(id)
  } catch (err) {
    console.error(err)
  }
}

export {
  fetchNotes,
  removeNote,
  notesComputed,
}