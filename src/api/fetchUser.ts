import User from './User'
import createUser from './createUser'
import axios from 'axios'
import { onMounted, ref, reactive } from 'vue'

async function fetchUser() {
  const id = prompt('Enter user ID') // Should be fetched from telegram
  const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/${id}`)
  if (!data) {
    createUser(Number(id))
    fetchUser()
  }
  return data
}

const user = await fetchUser()

let currentUser = reactive(user)

export default currentUser
