import User from './User.ts'
import currentUser from './fetchUser'
import { onMounted, ref, reactive } from 'vue'

function onBlockClick() {
  currentUser.moneytotal += currentUser.perclick
}

setInterval(() => {
  currentUser.moneytotal += currentUser.persecond / 10
}, 100)

export {onBlockClick}
