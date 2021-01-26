import axios from 'axios'

const { VITE_API_URL: API_URL} = import.meta.env

const postNote = async ({ title, content }) => {
  try {
    const { data } = await axios.post(`${API_URL}/notes/new`, { title, content })
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

const getNotes = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/notes/list`)
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

export {
  postNote,
  getNotes,
}