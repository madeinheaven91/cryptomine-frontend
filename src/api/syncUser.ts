import User from './User'
import currentUser from './fetchUser'
import axios from 'axios'
import { onMounted, ref, reactive } from 'vue'

export default function syncUser(user: User) {
  const id = user.id

  axios.interceptors.request.use((request) => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })

  axios
    .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/${user.id}`, {
      username: user.username,
      link: user.link,
      moneyTotal: user.moneytotal,
      perClick: user.perclick,
      perSecond: user.persecond
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
