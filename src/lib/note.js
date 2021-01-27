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
    return axios.delete(`${API_URL}/note/${id}`)
  } catch(err) {
    Promise.reject(err)
  }
}
const putNote = async (id, data) => {
  try {
    return axios.put(`${API_URL}/note/${id}`, { data })
  } catch(err) {
    Promise.reject(err)
  }
}

export {
  getNote,
  postNote,
  putNote,
  deleteNote,
}