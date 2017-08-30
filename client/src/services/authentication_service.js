import api from './api'
const pickData = (r) => r.data
export default {
  async login(info) {
    return api().post('login', info).then(pickData)
  },
  async register(info) {
    return api().post('register', info).then(pickData)
  }
}
