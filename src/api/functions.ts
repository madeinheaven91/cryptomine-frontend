import User from './User.ts'
import currentUser from './fetchUser'
import { onMounted, ref, reactive } from 'vue'

// Click increment
function onBlockClick() {
  currentUser.moneytotal += currentUser.perclick
}

// Auto increment
setInterval(() => {
  currentUser.moneytotal += currentUser.persecond / 10
}, 100)

export {onBlockClick}
