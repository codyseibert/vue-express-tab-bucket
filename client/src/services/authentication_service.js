import api from './api'
const pickData = (r) => r.data
export default {
  login (info) {
    return api().post('login', info).then(pickData)
  },
  register (info) {
    return api().post('register', info).then(pickData)
  }
}
