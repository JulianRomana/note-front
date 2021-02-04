import axios from 'axios'

const { VITE_API_URL: API_URL} = import.meta.env

const createAccount = async ({ username, email, password }) => {
  try {
    const { data: { data } } = await axios.post(`${API_URL}/user`, { username, email, password })
    return data.token
  } catch(err) {
    Promise.reject(err)
  }
}

export { createAccount }