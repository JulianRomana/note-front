import { ref, computed, } from 'vue'
import { getNote, deleteNote, putNote, postNote } from '../lib/note'

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

const addNote = async (data) => {
  try {
    await postNote(data)
  } catch (err) {
    console.error(err)
  }
}

const removeNote = async id => {
  try {
    await deleteNote(id)
    updateNotes(id)
  } catch (err) {
    console.error(err)
  }
}

const updateNote = async (id, data) => {
  try {
    await putNote(id, data)
  } catch (error) {
    console.error(error)
  }
}

export {
  addNote,
  fetchNotes,
  removeNote,
  notesComputed,
  updateNote,
}