import { ref, computed, } from 'vue'
import { getNotes } from '../lib/note'

const notes = ref([])
const notesComputed = computed(() => notes.value)

const fetchNotes = async () => {
  try {
    const { data } = await getNotes()
    notes.value = data
  } catch (err) {
    console.error(err)
  }
}

export {
  fetchNotes,
  notesComputed,
}