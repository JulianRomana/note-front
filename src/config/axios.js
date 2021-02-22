import axios from 'axios'

const { VITE_API_URL: API_URL} = import.meta.env
const JWT = localStorage.getItem('token')

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {'authorization': JWT ? `Bearer ${JWT}` : ''},
  responseType: 'json',
})

console.log(API_URL)
export default axiosInstance
