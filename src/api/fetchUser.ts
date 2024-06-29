import User from "./User"
import axios from 'axios'
import { onMounted, ref, reactive } from 'vue'

async function fetchUser() {
  const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/1`)
  return data
}

const user = await fetchUser();

let currentUser : User = reactive(user)

export default currentUser
