import axios from '@/config/axios'
import { setUserAuthorization } from '@/store/user-store'

const init = async (router) => {
  await axios.post('/user/token-check')
  .then(({ data: { isValid } }) => {
    setUserAuthorization(isValid)
  })
}

export { init }