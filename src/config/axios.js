import axios from 'axios'

const { VITE_API_URL: API_URL} = import.meta.env
const axiosInstance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
})

axiosInstance.interceptors.request.use(
  (req) => {
    const { headers } = req
    const JWT = localStorage.getItem('token')

    headers.authorization = JWT ? `Bearer ${JWT}` : ''
    return req
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
