import axios from 'axios'

const { VITE_API_URL: API_URL} = import.meta.env

const postNote = async ({ title, content }) => {
  try {
    const { data } = await axios.post(`${API_URL}/note`, { title, content })
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

const getNote = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/note`)
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

const deleteNote = async id => {
  try {
    console.log(id)
    const { data } = await axios.delete(`${API_URL}/note/${id}`)
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

export {
  postNote,
  getNote,
  deleteNote,
}