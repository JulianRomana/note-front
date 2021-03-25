import axios from '@/config/axios'

const postNote = async ({ title, content }) => {
  try {
    const { data } = await axios.post('/note', { title, content })
    return data
  } catch(err) {
    throw new Error(err)
  }
}

const getNote = async () => {
  try {
    const { data } = await axios.get('/note')
    return data
  } catch(err) {
    throw new Error(err)
  }
}

const deleteNote = async id => {
  try {
    return axios.delete(`/note/${id}`)
  } catch(err) {
    throw new Error(err)
  }
}
const putNote = async ({ id, data }) => {
  try {
    return axios.put(`/note/${id}`, data)
  } catch(err) {
    throw new Error(err)
  }
}

export {
  getNote,
  postNote,
  putNote,
  deleteNote,
}