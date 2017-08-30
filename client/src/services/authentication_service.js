import api from './api'
export default {
  login (info) {
    return api().post('login', info)
  },
  register (info) {
    return api().post('register', info)
  }
}
