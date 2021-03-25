import axios from '@/config/axios'

const createAccount = async ({ username, email, password }) => {
  try {
    const { data: { data } } = await axios.post('/user', { username, email, password })
    return data.token
  } catch(err) {
    throw new Error(err)
  }
}

const login = async ({ email, password }) => {
  try {
    const { data: { data } } = await axios.post('/user/login', { email, password })
    return data.token
  } catch({ response }) {
    const { message } = response.data
    throw new Error(message)
  }
}

export {
  createAccount,
  login
}