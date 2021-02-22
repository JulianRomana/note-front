import axios from '@/config/axios'

const postNote = async ({ title, content }) => {
  try {
    const { data } = await axios.post('/note', { title, content })
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

const getNote = async () => {
  try {
    const { data } = await axios.get('/note')
    return data
  } catch(err) {
    Promise.reject(err)
  }
}

const deleteNote = async id => {
  try {
    return axios.delete(`/note/${id}`)
  } catch(err) {
    Promise.reject(err)
  }
}
const putNote = async (id, data) => {
  try {
    return axios.put(`/note/${id}`, data)
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