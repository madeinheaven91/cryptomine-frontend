import User from './User'
import currentUser from './fetchUser'
import axios from 'axios'
import { onMounted, ref, reactive } from 'vue'

export default function syncUser(user) {
  const userId = user.userid
  //axios.interceptors.request.use((request) => {
  //  console.log('Starting Request', JSON.stringify(request, null, 2))
  //  return request
  //})

  axios
    .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`, {
      userId: userId,
      username: user.username,
      link: user.link,
      moneyTotal: parseInt(user.moneytotal),
      perClick: parseInt(user.perclick),
      perSecond: parseInt(user.persecond)
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
